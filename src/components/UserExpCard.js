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
                        <CardBody key={props.key}>
                            <CardTitle>{props.title}</CardTitle>
                            <CardSubtitle>{props.desc}</CardSubtitle>
                        </CardBody>
                        <img />
                        <CardBody>
                            <CardText>{props.date}</CardText>
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
