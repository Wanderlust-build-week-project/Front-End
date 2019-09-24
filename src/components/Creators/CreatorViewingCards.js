import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';
import styled from 'styled-components';
//this page will not be displayed but will take in data from the Creator Browsing page and return it as cards
import './CVP.css'

export default function(props) {

    const Header = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: fit-content;
    z-index: 2;
    top: 0;
    padding: 1vh 5vw;
  `;

  const Title = styled.h2`
    font-size: 2rem;
  `;

  const NaviLink = styled.span`
    text-decoration: none;
    margin-left: 40px;
  `;

  const handleLogout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    return "";
  };

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

    return (
        <>
            <Header>
                <Title>Wanderlust</Title>
                <nav className="gerneral-header-nav">
                <NaviLink>
                    <Link className="header-link" to="/creator-landing-page">
                    Home
                    </Link>
                </NaviLink>
                <NaviLink>
                    <Link className="header-link" to="/creator-viewing-page">
                    My Created Trips
                    </Link>
                </NaviLink>
                <NaviLink>
                    <Link className="header-link" to="/experiences">
                    Experiences
                    </Link>
                </NaviLink>

                <NaviLink onClick={handleLogout}>
                    <Link to="/">Logout</Link>
                </NaviLink>
                </nav>
            </Header>
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