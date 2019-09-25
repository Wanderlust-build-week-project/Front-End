import React from 'react';
import {Link} from 'react-router-dom';
//this page will not be displayed but will take in data from the Creator Browsing page and return it as cards
import Header from '../Header';
import './CVP.css'

export default function(props) {

    return (
        <>
            <Header/>
            <div className="card">
                <div className="row">
                    <span className="title">{props.name}</span>
                    <span className="location">{props.location}</span>
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
        </>
    )
}