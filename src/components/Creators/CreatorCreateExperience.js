import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';

import Header from '../Header';
import './CVP.css';

const CreatorCreateExperienceForm = (props) => {

  const dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  const today = month + "-" + day + "-" + year;

  const [experience, setExperience] = useState(
    {
      name: "",
      description: "",
      date: "",
      duration: "",
      organizer_id: localStorage.getItem('userID'),
      location_id: localStorage.getItem('location'),
      completed: false
    }
  );

  const [place, setPlace] = useState({
    place: ""
  });

  useEffect(() => {
    console.log(`running`)
    axiosWithAuth()
    .get(`https://wanderlustbw.herokuapp.com/locations/${localStorage.getItem('location')}`)
    .then(response => {
    console.log(`this is selected location`, response.data)
    setPlace({place: response.data.location})
    // console.log(`this is location`, location)
    })
    .catch(error => {
    console.log(error)
    });
  }, [])

  const submitNewExperience = event => {
    event.preventDefault();
    console.log(`this is experiance`, experience)
    axiosWithAuth()
      .post('https://wanderlustbw.herokuapp.com/exp', experience)
      .then(res => {
        console.log(res)
        props.history.push(`/creator-viewing-page`)
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    setExperience({...experience, [e.target.name]: e.target.value});
  }

  return (
    <>
      <Header/>
      <div className="new-experience">
        <h2>Create a New Experience</h2>
        <form className="new-experience-form" onSubmit = {submitNewExperience}>
          <label className="label" for="name">Title:</label>
          <input className="new-experience-input"
            type="text"
            name="name"
            placeholder="Experience Title"
            value={experience.name}
            onChange={handleChange}
          />
          <label className="label" for="description">Description:</label>
          <textarea className="description" name="description" placeholder="Experience Description" value={experience.description} onChange={handleChange} />
          <div className="date-dur-loc">
            <div className="column">
            <label className="label" for="date">Date:</label>
              <input className="small-input"
                type="datetime"
                name="date"
                placeholder={today}
                value={experience.date}
                onChange={handleChange}
              />
            </div>
            <div className="column">
              <label className="label" for="duration">Duration in hours: </label>
                <input className="small-input"
                type="number"
                name="duration"
                value={experience.duration}
                onChange={handleChange}
              />
            </div>
            <div className="column">      
              {place.place}
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