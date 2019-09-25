//this page will not be displayed but will take in data from the User Browsing page and return it as cards
import { Route, Link } from "react-router-dom";
import React from 'react'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import Header from "../Header"

const UserBrowsingCards = (props) => {
    return (
        <div>
            <Header />
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
            
        </div>
    )
}

export default UserBrowsingCards
