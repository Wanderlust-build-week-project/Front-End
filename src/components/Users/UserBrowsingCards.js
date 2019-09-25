//this page will not be displayed but will take in data from the User Browsing page and return it as cards
<<<<<<< HEAD
import { Route, Link } from "react-router-dom";
import React from 'react'
=======
import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'

>>>>>>> 8b3f93ff74166b99f495f90416bf151c4ca1e89b
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
<<<<<<< HEAD
             <Row>
                <Col sm="6">
                    <Card>
                        <CardBody {...props.key}>
                            <CardTitle>{props.title}</CardTitle>
                            <CardSubtitle>{props.desc}</CardSubtitle>
                            <CardText>{props.hours}</CardText>
                            <CardText>{props.date}</CardText>
                        </CardBody>
                        <CardImg src={props.img} alt={props.title}/>
                        <div onClick={props.exprnc}>Save This Trip</div>
                        {/* <Link to ={`/experince/:id`} /> need to find the right rt */}
                    </Card>
                </Col>
            </Row>
            
=======
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
>>>>>>> 8b3f93ff74166b99f495f90416bf151c4ca1e89b
        </div>
    )
}

export default UserBrowsingCards
