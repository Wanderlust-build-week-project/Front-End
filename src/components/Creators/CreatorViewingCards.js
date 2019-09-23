import React from 'react';
import styled from 'styled-components';
//this page will not be displayed but will take in data from the Creator Browsing page and return it as cards
import './CVP.css'

export default function(props) {
    return (
        <div className="card">
            <div className="row">
                <span className="title">{props.name}</span>
                <span className="location">{props.location_id}</span>
                <span className="icons">
                    <span><button className="icon-btn">&#9998;</button></span>
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