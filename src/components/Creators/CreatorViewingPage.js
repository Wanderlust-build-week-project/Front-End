import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

import Header from '../Header';
import Card from './CreatorViewingCards';
import './CVP.css';

const CreatorViewingPage = (props) => {

  const user = "admin";
  const api = `https://wanderlustbw.herokuapp.com/experiences/organizer/name/${user}`;

  const [experiences, setExperiences] = useState([{
    id: 1,
    name: "Preview Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "09/23/2019 1PM",
    duration: 1,
    location_id: 1,
    completed: false
  }]);

  useEffect(() => {
    axios.get(api)
    .then(response => {
      console.log(response)
      setExperiences(...experiences, response)
    })
    .catch(error => {
      console.log(error)
    });
  }, [])

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