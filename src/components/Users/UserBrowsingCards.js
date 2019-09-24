//this page will not be displayed but will take in data from the User Browsing page and return it as cards
import React from 'react'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

const UserBrowsingCards = (props) => {
    return (
        <div>
             <Row>
                <Col sm="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Exp Title</CardTitle>
                            <CardSubtitle>Mini Dsc.</CardSubtitle>
                        </CardBody>
                        <img />
                        <CardBody>
                            <CardText>Quick Blurb</CardText>
                            <CardLink href="#">Register</CardLink>
                            <CardLink href="#">Rate</CardLink>
                        </CardBody>
                
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}

export default UserBrowsingCards
