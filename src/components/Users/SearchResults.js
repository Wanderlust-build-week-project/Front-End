import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import Header from "./UserHeader";

const SearchResults = (props) => {
  // console.log(props)
    const [searchOutcome, setSearchOutcome] = useState([])
    // var searchOutcome = []

    useEffect(() => {
        // var pathArray = window.location.pathname.split('/')
        // var id = pathArray[pathArray.length -1]
        var retrieve = localStorage.getItem("SearchResults");
        var IDs = JSON.parse(retrieve);

        IDs.map(id => {
          console.log('here is the', id)
          axiosWithAuth()
        .get(`https://wanderlustbw.herokuapp.com/exp/experience/${id}`)
        .then(response => {
          // console.log(`this is on the Search Outcome page`, response.data)
          console.log(`this is searchOutcome 1`, searchOutcome)
            console.log(`response`, response.data)
            let experience = {...response.data}
            console.log(`this is searchOutcome 2`, searchOutcome)
            axiosWithAuth()
            .get(`https://wanderlustbw.herokuapp.com/locations/${experience.location_id}`)
                .then(res => {
                console.log(`this is the display location`, res)
                experience.local = res.data.location
                console.log(`experience.location`, experience.local)
                // setPlace(response.data.location)
                })
                .catch(error => {
                console.log(error)
                })
                axiosWithAuth()
                .get(`https://wanderlustbw.herokuapp.com/organizers/${response.data.organizer_id}`)
                    .then(res2 => {
                      experience.organizer = res2.data
                    console.log(`these are the organizers`, response)
                    // setOrganizer(response.data.name)
                    setSearchOutcome(searchOutcome => [...searchOutcome, experience])
                    })
                    .catch(error => {
                    console.log(error)
                    })
        })
        .catch(error => {
          console.log(error)
        });
        })  
      },[])

  if (searchOutcome.length > 0) {
    return (
      <>
        <div>
          <Header />
            {searchOutcome.map(outcome => {
              return (
                <Card key = {outcome.id}>
                <CardBody>
                <CardTitle>Name: {outcome.name}</CardTitle>
                <CardSubtitle>Description: {outcome.description}</CardSubtitle>
                <CardText>Duration: {outcome.duration} hours</CardText>
                <CardText>Date: {outcome.date}</CardText>
                <CardText>Organizer: {outcome.organizer.name}</CardText>
                <CardText>Location: {outcome.local}</CardText>
                </CardBody>
              </Card>
              )
            })}
            <button onClick = {()=> {props.history.push('/user-browsing-page')}}>Return to browsing</button>
          </div>
      </>
    )
  } else {
    return (
      <div>
        <h1>Sorry no Trips were found matching that Description</h1>
        <button onClick = {()=> {props.history.push('/user-browsing-page')}}>Return to browsing</button>
      </div>
    )
  }
}

export default SearchResults