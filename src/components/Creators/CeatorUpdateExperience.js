import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth'
import Geosuggest from 'react-geosuggest';
import Header from './CreatorHeader.js';
import './CVP.css';
import './geosuggest.css';

const locationPlaceholder = "location_id";
const CreatorUpdateExperienceForm = (props) => {

  const [location, setLocation] = useState("");
  useEffect(() => {
      axiosWithAuth().get(`https://wanderlustbw.herokuapp.com/locations/${props.location_id}`)
      .then(response => {
          setLocation(response.data.location)
      })
      .catch(error => {
          console.log("Unable to fetch location name.", error)
      })
  }, []) 

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
        // setPlace({place: res.data.location})
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
            <label className="label" for="date">Date and time:</label>
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
              <label className="label" htmlFor="location">Location: </label>
              <Geosuggest initialValue={location} onSuggestSelect={handleGeosuggestChange} />
            </div>
          </div>
          <span className="button-span">
            <Link to="/creator-viewing-page"><button className="create-btn" type="submit" onClick = {handleUpdate}>Save</button></Link>
            <Link to="/creator-viewing-page"><button className="create-btn">Cancel</button></Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default CreatorUpdateExperienceForm;