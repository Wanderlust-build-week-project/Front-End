//this page will not be displayed but will take in data from the User Browsing page and return it as cards
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
                            <CardText>{props.loc}</CardText>
                            <CardText>{props.hours}</CardText>
                            <CardText>{props.date}</CardText>
                        </CardBody>
                        <img />
                
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}

export default UserBrowsingCards
