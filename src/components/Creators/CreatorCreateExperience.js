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

  const [place, setPlace] = useState("");
 
  const handleChange = e => {
    setExperience({...experience, [e.target.name]: e.target.value});
  }

  function handleGeosuggestChange(suggest) {
    console.log(suggest);
    let arr = suggest.description.split(',');
    console.log(arr[0]);
    setPlace(arr[0]);
  }

   const submitNewExperience = event => {
    event.preventDefault();

    axiosWithAuth().get(`https://wanderlustbw.herokuapp.com/locations/location/${place}`)
    .then(response => {
      if (response.data.id > 0) {
        var grabbedID = response.data.id;
        console.log("grabbed id:", grabbedID)
        let newExperience = {...experience};
        newExperience.location_id = grabbedID;
        // await setExperience(newExperience);
        submitFinal(newExperience);
      } else {
          console.log("Does ", place," exist?", false)
          console.log(`This is a new location:`, place)
          const placeObject = {"location": place}
          axiosWithAuth()
          .post(`https://wanderlustbw.herokuapp.com/locations`, placeObject)
          .then(response => {
            console.log(`Location added.`, response)
            console.log("grabbed id:", response.data.id)
            submitFinal(response.data.id);
          })
          .catch(error => {
            console.log("Unable to add location.", error)
          });
          
      }})
    .catch(error => {
      console.log("Error accessing location database.", error)
    })
  }

  function submitFinal(exp) {
    // console.log(experience.location_id);
    // console.log(loc_id);
    console.log(`Creating new experience:`, exp)
    axiosWithAuth()
      .post('https://wanderlustbw.herokuapp.com/exp', exp)
      .then(res => {
        console.log("New experience response:", res)
        props.history.push(`/creator-viewing-page`)
      })
      .catch(err => console.log("Unable to submit experience.", err, experience));
  }

  async function something(id) {
    await setExperience({...experience, location_id: id});
    
  }

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
              <Geosuggest onSuggestSelect={handleGeosuggestChange} />
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