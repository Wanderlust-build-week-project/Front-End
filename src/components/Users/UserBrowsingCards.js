//this page will not be displayed but will take in data from the User Browsing page and return it as cards
import React from 'react'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import Header from "../Header"

const UserBrowsingCards = (props) => {
    console.log (props)

    return (
        <div>
            <Header />
            <Card>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.desc}</CardSubtitle>
                    <CardText>{props.hours}</CardText>
                    <CardText>{props.date}</CardText>
                    <CardText>{props.location}</CardText>
                </CardBody>       
            </Card>
        </div>
    )
}

export default UserBrowsingCards
