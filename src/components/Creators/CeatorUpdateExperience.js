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

  const [test, setText] = useState()
  const [experience, setExperience] = useState(
    {
      name: "",
      description: "",
      date: "",
      duration: "",
      location_id: "",
      completed: false
    }
  );

  const [place, setPlace] = useState({
    place: ""
  })

  useEffect(() => {
    var pathArray = window.location.pathname.split('/')
    // console.log(pathArray)
    var id = pathArray[pathArray.length -1]
    axiosWithAuth()
    .get(`https://wanderlustbw.herokuapp.com/exp/experience/${id}`)
    .then(response => {
      console.log(`this is on the update page`, response.data)
        setExperience(response.data)
        console.log(`running`)
        axiosWithAuth()
        .get(`https://wanderlustbw.herokuapp.com/locations/${response.data.location_id}`)
        .then(res => {
        console.log(`this is selected location`, res)
        setPlace({place: res.data.location})
        // console.log(`this is location`, location
        })
        .catch(error => {
        console.log(error)
        });
        })
    .catch(error => {
      console.log(error)
    });
  }, [test])

  const handleChange = e => {
    setExperience({...experience, [e.target.name]: e.target.value});
  }

  const handleUpdate = () => {
  var pathArray = window.location.pathname.split('/')
  // console.log(pathArray)
  var id = pathArray[pathArray.length -1]
  axiosWithAuth()
    .put(`https://wanderlustbw.herokuapp.com/exp/experience/${id}`, experience)
    .then(response => {
      console.log(`component updated`, response)
    })
    .catch(error => {
      console.log(error)
    });
  }

  return (
    <>
      <Header/>
      <div className="new-experience">
        <h2>Update This Experience</h2>
        <form className="new-experience-form" onSubmit = {handleUpdate}>
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
                  type="text"
                  name="place"
                  value={place.place}
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