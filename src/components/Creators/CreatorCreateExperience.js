import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';
import Geosuggest from 'react-geosuggest';
import Header from './CreatorHeader.js';
import './CVP.css';
import './geosuggest.css';

const locationPlaceholder = "location_id";
const CreatorCreateExperienceForm = (props) => {

  const dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  const tomorrow = month + "-" + day + "-" + year + " 12:00PM";

  const [experience, setExperience] = useState(
    {
      name: "",
      description: "",
      date: null,
      duration: 1,
      organizer_id: parseInt(localStorage.getItem('userID'), 10),
      location_id: 0,
      completed: false
    }
  );

  const handleChange = e => {
    setExperience({...experience, [e.target.name]: e.target.value});
  }

  function handleGeosuggestChange(value) {
    let selectedPlace;
    if(value.description.includes(",")) {
    selectedPlace = value.description.split(',')[0];
  } else {
    selectedPlace = value.description;
  }
    let exists = false;

    axiosWithAuth().get(`https://wanderlustbw.herokuapp.com/locations/location/${selectedPlace}`)
    .then(response => {
      if (response.data.id > 0) {
        exists = true;
        console.log("Does", selectedPlace , "exist in the database?", exists, ". id:", response.data.id)
        setExperience({...experience, [locationPlaceholder]: response.data.id});
      } else {
          exists = false;
          console.log("Does ", selectedPlace," exist?", exists)
          console.log(`This is a new location:`, selectedPlace)
          const place = {"location": selectedPlace}
          axiosWithAuth()
          .post(`https://wanderlustbw.herokuapp.com/locations`, place)
          .then(response => {
            console.log(`Location added.`, response)
            axiosWithAuth().get(`https://wanderlustbw.herokuapp.com/locations/location/${selectedPlace}`)
            .then(response=> {
              setExperience({...experience, [locationPlaceholder]: response.data.id});
            })
            .catch(error => {
              console.log("Unable to fetch location after add.", error)
            })
          })
          .catch(error => {
            console.log("Unable to add location.", error)
          });
      }
    })
    .catch(error => {
      console.log("Error accessing location database.", error)
    })
  }

  const submitNewExperience = event => {
    event.preventDefault();
    console.log(`Creating new experience:`, experience)
    axiosWithAuth()
      .post('https://wanderlustbw.herokuapp.com/exp', experience)
      .then(res => {
        console.log("New experience response:", res)
        props.history.push(`/creator-viewing-page`)
      })
      .catch(err => console.log("Unable to submit experience.", err, experience));
  };

  return (
    <>
      <Header />
      <div className="new-experience">
        <h2>Create a New Experience</h2>
        <form className="new-experience-form" onSubmit = {submitNewExperience}>
          <label className="label" htmlFor="name">Title:</label>
          <input className="new-experience-input"
            type="text"
            name="name"
            placeholder="Experience Title"
            value={experience.name}
            onChange={handleChange}
          />
          <label className="label" htmlFor="description">Description:</label>
          <textarea className="description" name="description" placeholder="Experience Description" value={experience.description} onChange={handleChange} />
          <div className="date-dur-loc">
            <div className="column">
            <label className="label" htmlFor="date">Date and time:</label>
              <input className="small-input"
                type="datetime"
                name="date"
                placeholder={tomorrow}
                value={experience.date}
                onChange={handleChange}
              />
            </div>
            <div className="column">
              <label className="label" htmlFor="duration">Duration in hours: </label>
                <input className="small-input"
                type="number"
                name="duration"
                value={experience.duration}
                onChange={handleChange}
              />
            </div>
            <div className="column">
              <label className="label" htmlFor="location">Location: </label>
              <Geosuggest onSuggestSelect={handleGeosuggestChange}/>
            </div>
          </div>
          <span className="button-span">
            <button className="create-btn" type="submit">Save</button>
            <Link to="/creator-viewing-page"><button className="create-btn">Return</button></Link>
          </span>
        </form>
      </div>
    </>
  );
};



export default CreatorCreateExperienceForm;