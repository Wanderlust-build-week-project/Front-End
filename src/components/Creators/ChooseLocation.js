import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {Link} from 'react-router-dom';


const ChooseLocation = (props) => {
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
            {locations.map(location =>
                <Link to = {'/creator-create-experience-form'} onClick = {() => localStorage.setItem('location', location.id)} >{location.location}</Link>
                )}

                <form onSubmit = {addLocation}>
                <label className="Enter Location" for="name">Enter Location:</label>
                <input
                    type="text"
                    name="location"
                    placeholder="Location i.e. New York"
                    value={newLocation.location}
                    onChange={handleChange}
                />
                <button type = 'submit'>Add location</button>
                </form>
          </>
      )
  }

  export default ChooseLocation