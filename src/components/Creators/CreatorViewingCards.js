import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';
//this page will not be displayed but will take in data from the Creator Browsing page and return it as cards
import './CVP.css'

export default function(props) {

    // const [location, setLocation] = useState("");

    // useEffect(() => {
    //     axios.get(`https://wanderlustbw.herokuapp.com/locations/${props.location}`)
    //     .then(response => {
    //         console.log("Location Data", response);
    //         setLocation(response.location);
    //     })
    //     .catch(error => {
    //         console.log("Error Message: ", error)
    //     })

    // }, [])

    const deleteExperience = id => {
        console.log(`should be 4`, id)
        axiosWithAuth()
        .delete(`https://wanderlustbw.herokuapp.com/exp/experience/${id}`)
      .then(res => {
        // this.props.history.push(`/`);
        console.log(res);
        // setState(res.data)
        // console.log(this.props.history.push(`/`))
        })
      .catch(err => console.log(err.response));
    }

    return (
        <div className="card">
            <div className="row">
                <span className="title">{props.name}</span>
                <span className="location">{props.location}</span>
                <span className="icons">
                    <span><Link to={`/creator-create-experience-form`}><button className="icon-btn">&#9998;</button></Link></span>
                    <span><button className="icon-btn" onClick = {deleteExperience(4)}>&#128465;</button></span>
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