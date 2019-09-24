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
                        <CardBody>
                            <CardTitle>Exp Title</CardTitle>
                            <CardSubtitle>Mini Dsc.</CardSubtitle>
                            <CardText>Location</CardText>
                            <CardText>Duration</CardText>
                        </CardBody>
                        <img />
                
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}

export default UserBrowsingCards
