import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';

import Header from '../Header';
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
    .get(`https://wanderlustbw.herokuapp.com/experiences/organizer/${props.userID}`)
    .then(response => {
      console.log(response)
      setExperiences(response)
    })
    .catch(error => {
      console.log(error)
    });
  }, [props.userID])

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
                name={experience.name}
                description={experience.description}
                date={experience.date}
                duration={experience.duration}
                location_id={experience.location_id}
                completed={experience.completed}
                />
              )
          })
        }
    </>
  );
};

export default CreatorViewingPage;