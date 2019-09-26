import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';
import Header from './CreatorHeader.js';
import styled from 'styled-components';
import Card from './CreatorViewingCards';
import './CVP.css';

const CreatorViewingPage = (props) => {
  
  const [experiences, setExperiences] = useState([{
    id: "",
    name: "",
    description: "",
    date: "",
    duration: "",
    location_id: "",
    completed: ""
  }]);
  useEffect(() => {
    axiosWithAuth()
    .get(`https://wanderlustbw.herokuapp.com/exp/organizer/${localStorage.getItem('userID')}`)
    .then(response => {
      console.log(`this should be experiences`, response)
      setExperiences(response.data)
    })
    .catch(error => {
      console.log(error)
    });
  }, [])
  const reRender = () => {
  axiosWithAuth()
    .get(`https://wanderlustbw.herokuapp.com/exp/organizer/${localStorage.getItem('userID')}`)
    .then(response => {
      console.log(`this should be experiences`, response)
      setExperiences(response.data)
    })
    .catch(error => {
      console.log(error)
    });
  }
  const deleteExperience = (id) => {
    console.log("Experience to Delete ID", id)
    axiosWithAuth()
    .delete(`https://wanderlustbw.herokuapp.com/exp/experience/${id}`)
  .then(res => {
    reRender()
    console.log(res);
    // setState(res.data)
    // console.log(this.props.history.push(`/`))
    })
  .catch(err => console.log(err.response));
  }
  return (
    <>
      <Header />
      <div className="titlebar">
        <span className="title">Your Experiences</span>
        <span><Link to="/creator-create-experience-form"><button className="create-new">Create New</button></Link></span>
      </div>
        {
          experiences.map((experience) => {
            return (
              <Card
                key={experience.id}
                id={experience.id}
                name={experience.name}
                description={experience.description}
                date={experience.date}
                duration={experience.duration}
                location_id={experience.location_id}
                completed={experience.completed}
                deleteExperience = {deleteExperience}
                />
              )
          })
        }
    </>
  );
};
export default CreatorViewingPage;