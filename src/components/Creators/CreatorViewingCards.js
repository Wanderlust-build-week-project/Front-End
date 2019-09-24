import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
//this page will not be displayed but will take in data from the Creator Browsing page and return it as cards
import './CVP.css'

export default function(props) {

    const [location, setLocation] = useState("");

    useEffect(() => {
        axios.get(`https://wanderlustbw.herokuapp.com/locations/${props.location}`)
        .then(response => {
            console.log("Location Data", response);
            setLocation(response.location);
        })
        .catch(error => {
            console.log("Error Message: ", error)
        })

    }, [])

    return (
        <div className="card">
            <div className="row">
                <span className="title">{props.name}</span>
                <span className="location">{location}</span>
                <span className="icons">
                    <span><Link to="/creator-update-experience-form"><button className="icon-btn">&#9998;</button></Link></span>
                    <span><button className="icon-btn">&#128465;</button></span>
                </span>
            </div>
            <hr></hr>
            <div className="row">
                <span>Date: {props.date}</span>
                <span>Duration: {props.duration} hours</span>
            </div>
            <hr></hr>
            <p>{props.description}</p>
        </div>
    )
}