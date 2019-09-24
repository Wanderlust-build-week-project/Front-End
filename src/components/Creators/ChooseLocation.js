import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Header';
import './CVP.css';


const ChooseLocation = (props) => {

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
    const [locations, setLocations] = useState([])
    const [newLocation, setNewLocation] = useState({
        location: ""
        } 
    )

    useEffect(() => {
        axiosWithAuth()
        .get(`https://wanderlustbw.herokuapp.com/locations`)
        .then(response => {
        console.log(`this is on the choose location`, response)
        setLocations(response.data)
        })
        .catch(error => {
        console.log(error)
        });
    }, [])

    const reRender = () => {
        axiosWithAuth()
        .get(`https://wanderlustbw.herokuapp.com/locations`)
        .then(response => {
        console.log(`this is on the choose location`, response)
        setLocations(response.data)
        })
        .catch(error => {
        console.log(error)
        });
    }

    const addLocation = event => {
        event.preventDefault();
        console.log(`this is the new location`, newLocation.location)
        axiosWithAuth()
        .post(`https://wanderlustbw.herokuapp.com/locations`, newLocation)
        .then(response => {
        console.log(`location added`, response)
        reRender();
        })
        .catch(error => {
        console.log(error)
        });
    }

    const handleChange = e => {
        setNewLocation({...newLocation, [e.target.name]: e.target.value});
      }

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
            <div className="loc-card">
                <p className="title">Choose A Location</p>
                <div className="loc-list">
                    <ul className="loc-ul">
                    {
                    locations.map(location =>
                        <li>
                        <Link to = {'/creator-create-experience-form'} onClick = {() => localStorage.setItem('location', location.id)} className="loc-link" > {location.location}</Link>
                        </li>
                    )}
                    </ul>
                </div>
            </div>
            <div className="card">
                <p className="title-small">Don't see your location?</p>
                <form onSubmit = {addLocation}>
                <input className="loc-input"
                    type="text"
                    name="location"
                    placeholder="Location i.e. New York"
                    value={newLocation.location}
                    onChange={handleChange}
                />
                <button className="loc-btn" type = 'submit'>Add location</button>
                </form>
            </div>
          </>
      )
  }

  export default ChooseLocation