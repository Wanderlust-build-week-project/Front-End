import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

const Experience = () => {
const [exprnc, setExprnc] = useState({})

useEffect(() => {
    const id = props.match.param.id;
    //need to set params from call 
    axiosWithAuth
    .get()
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err)
    )

}, [props.match.param.id])

const saveExpr = () => {
    const addToSaved = props.addToSaved;
    addToSaved(exprnc)
}



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
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Experience
