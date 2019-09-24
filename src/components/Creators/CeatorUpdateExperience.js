import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth'

import Header from '../Header';
import './CVP.css';

const CreatorUpdateExperienceForm = (props) => {

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
      duration: 0,
      location_id: 0,
      completed: false
    }
  );

  useEffect(() => {
    axiosWithAuth()
    .get(`https://wanderlustbw.herokuapp.com/experiences/${props.match.params.id}`)
    .then(response => {
      console.log(response)
      setExperience(response)
    })
    .catch(error => {
      console.log(error)
    });
  }, [props.match.params.id])

  const handleChange = e => {
    setExperience({...experience, [e.target.name]: e.target.value});
  }

  return (
    <>
      <Header/>
      <div className="new-experience">
        <h2>Update This Experience</h2>
        <form className="new-experience-form">
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
              <label className="label" for="location">Location: </label>
              <input className="small-input"
                type="number"
                name="location"
                value={experience.location_id}
                onChange={handleChange}
              />
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

export default CreatorUpdateExperienceForm;