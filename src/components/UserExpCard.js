import React from 'react'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import Header from "./"

const UserExpCard = (props) => {
    return (
        <div>
            <Header />
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
    );
};

export default UserExpCard
