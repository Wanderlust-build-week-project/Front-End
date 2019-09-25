import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {
    Card, Button, CardHeader, CardBody,
    CardTitle, CardText
} from 'reactstrap';

const Experience = () => {
    const [exprnc, setExprnc] = useState({})

    useEffect(() => {
        const id = props.match.param.id;
        //need to set params from call 
        axiosWithAuth
            .get(`https://wanderlustbw.herokuapp.com/exp/experience/${id}`)
            .then(res => {
                console.log(res)
                setExprnc(res.data)
            })
            .catch(err => console.log(err)
            )

    }, [props.match.param.id])

    const saveExpr = () => {
        const addToSaved = props.addToSaved;
        addToSaved(exprnc)
    }

    if (!exprnc) {
        return <div>Loading Trip information...</div>;
    }

    return (
        <div>
            <Card>
                <CardHeader>Saved Trips!</CardHeader>
                <CardBody>
                    <CardTitle>{props.title}t</CardTitle>
                    <CardText>{props.desc}</CardText>
                    <Button onClick={props.exprnc}>Save This Trip</Button>
                </CardBody>
            </Card>

        </div>
    )
}

export default Experience
