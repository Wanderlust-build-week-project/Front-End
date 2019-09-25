//this page will not be displayed but will take in data from the User Browsing page and return it as cards
import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'

import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import Header from "../Header"

const UserBrowsingCards = (props) => {
    // console.log (props)
    const [place, setPlace] = useState({
        place: ""
    })

    const [oranizer, setOrganizer] = useState({
        oranizer: ""
    })

    useEffect(() => {
        axiosWithAuth()
        .get(`https://wanderlustbw.herokuapp.com/locations/${props.location}`)
            .then(response => {
            // console.log(`this is the display location`, response.data.location)
            setPlace({ place: response.data.location })
            })
            .catch(error => {
            console.log(error)
            })
      }, [])

      useEffect(() => {
        //   console.log(props.organizerID)
        axiosWithAuth()
        .get(`https://wanderlustbw.herokuapp.com/organizers/${props.organizerID}`)
            .then(response => {
            // console.log(`these are the organizers`, response)
            setOrganizer({ oranizer: response.data.name })
            })
            .catch(error => {
            console.log(error)
            })
      }, [])

    return (
        <div>
            <Header />
            <Card>
                <CardBody>
                    <CardTitle>Name: {props.title}</CardTitle>
                    <CardSubtitle>Description: {props.desc}</CardSubtitle>
                    <CardText>Duration: {props.hours} hours</CardText>
                    <CardText>Date: {props.date}</CardText>
                    <CardText>Organizer: {oranizer.oranizer}</CardText>
                    <CardText>Location: {place.place}</CardText>
                </CardBody>       
            </Card>
        </div>
    )
}

export default UserBrowsingCards
