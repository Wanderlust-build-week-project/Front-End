import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';

import Header from '../Header';
import Card from './CreatorViewingCards';

const CreatorViewingPage = (props) => {

  const user = "";
  const api = `https://wanderlustbw.herokuapp.com/experiences/organizer/name/${user}`;

  const [experiences, setExperiences] = useState([{
    id: 1,
    name: "Preview Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "09/23/2019 1PM",
    duration: 1,
    location_id: 1,
    completed: false
  }, {
    id: 2,
    name: "Preview Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "09/23/2019 2PM",
    duration: 1,
    location_id: 1,
    completed: false
  }, {
    id: 2,
    name: "Preview Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "09/23/2019 3PM",
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

  const ExperienceList = styled.div`
  background-color: white;
  width: 50%;
  max-width: 750px;
  margin: 10% auto 5%;
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
`;

  return (
    <>
      <Header />
      <ExperienceList>
        <h2>Experiences You're Hosting</h2>
      </ExperienceList>
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