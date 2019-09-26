import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//this page will not be displayed but will take in data from the Creator Browsing page and return it as cards
import './CVP.css'
import axiosWithAuth from '../../utils/axiosWithAuth';

export default function(props) {
    const [location, setLocation] = useState("");
    useEffect(() => {
        axiosWithAuth().get(`https://wanderlustbw.herokuapp.com/locations/${props.location_id}`)
        .then(response => {
            setLocation(response.data.location)
        })
        .catch(error => {
            console.log("Unable to fetch location name.", error)
        })
    }, []) 


    return (
        <div className="card">
            <div className="row">
                <span className="name-loc">
                    <span className="title">{props.name}</span>
                    <span className="location">{location}</span>
                </span>
                <span className="icons">
                    <span><Link to={`/creator-update-experience-form/${props.id}`}><button className="icon-btn">&#9998;</button></Link></span>
                    <span><button className="icon-btn" onClick = {() => {props.deleteExperience(props.id)}}>&#128465;</button></span>
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