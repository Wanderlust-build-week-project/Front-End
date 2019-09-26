import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import Header from "../Header"

const SearchResults = (props) => {
  console.log(props)
    const [searchOutcome, setSearchOutcome] = useState([])
    const [place, setPlace] = useState("")
    const [oranizer, setOrganizer] = useState("")

    useEffect(() => {
        // var pathArray = window.location.pathname.split('/')
        // var id = pathArray[pathArray.length -1]
        var retrieve = localStorage.getItem("SearchResults");
        var IDs = JSON.parse(retrieve);

        IDs.map(id => {
          axiosWithAuth()
        .get(`https://wanderlustbw.herokuapp.com/exp/experience/${id}`)
        .then(response => {
          console.log(`this is on the Search Outcome page`, response.data)
            setSearchOutcome(response.data)
            axiosWithAuth()
            .get(`https://wanderlustbw.herokuapp.com/locations/${response.data.location_id}`)
                .then(response => {
                console.log(`this is the display location`, response.data.location)
                setPlace(response.data.location)
                })
                .catch(error => {
                console.log(error)
                })
                axiosWithAuth()
                .get(`https://wanderlustbw.herokuapp.com/organizers/${response.data.organizer_id}`)
                    .then(response => {
                    console.log(`these are the organizers`, response)
                    setOrganizer(response.data.name)
                    })
                    .catch(error => {
                    console.log(error)
                    })
        })
        .catch(error => {
          console.log(error)
        });
        })  
      }, [])

  return (
    <>
        <div>
            <Header />
                <Card>
                <CardBody>
                    <CardTitle>Name: {searchOutcome.name}</CardTitle>
                    <CardSubtitle>Description: {searchOutcome.description}</CardSubtitle>
                    <CardText>Duration: {searchOutcome.duration} hours</CardText>
                    <CardText>Date: {searchOutcome.date}</CardText>
                    <CardText>Organizer: {oranizer}</CardText>
                    <CardText>Location: {place}</CardText>
                </CardBody>       
            </Card>
            <button onClick = {()=> {props.history.push('/user-browsing-page')}}>Return to browsing</button>
        </div>
    </>
  )
}

export default SearchResults