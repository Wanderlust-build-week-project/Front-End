import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {Link} from 'react-router-dom';
import Header from './CreatorHeader.js';
import './CVP.css';


const ChooseLocation = (props) => {

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
            <Header />
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