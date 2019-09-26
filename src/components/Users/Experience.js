import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import axios from "axios"

const Experience = (props) => {
  const [exprnc, setExprnc] = useState({});

    useEffect(() => {
        // axiosWithAuth
        axios
            .get(`https://wanderlustbw.herokuapp.com/exp/experience/id`)
            .then(res => {
                console.log(res)
                setExprnc(res.data)
            })
            .catch(err => console.log(err)
            )

    }, [])

    const saveExpr = () => {
        const addToSaved = props.addToSaved;
        addToSaved(exprnc);
    };

    if (!exprnc) {
        return <div>Loading Trip information...</div>;
    }
    console.log("saved props", props)

  return (
   <div>
    </div>
  );
};

export default Experience;
