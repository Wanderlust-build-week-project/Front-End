//this page will not be displayed but will take in data from the User Browsing page and return it as cards
import React, {useState} from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'

import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import Header from "../Header"

const UserBrowsingCards = (props) => {
    console.log (props)
    const [place, setPlace] = useState({
        place: ""
    })

    return (
        <div>
            <Header />
            <Card>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.desc}</CardSubtitle>
                    <CardText>{props.hours}</CardText>
                    <CardText>{props.date}</CardText>
                    {/* {axiosWithAuth()
                    .get(`https://wanderlustbw.herokuapp.com/locations/${props.location}`)
                    .then(response => {
                    console.log(`this is the display location`, response)
                    // setPlace({ place: response.data })
                    })
                    .catch(error => {
                    console.log(error)
                    })
                    }
                    <CardText>{place.place}</CardText> */}
                </CardBody>       
            </Card>
        </div>
    )
}

export default UserBrowsingCards
