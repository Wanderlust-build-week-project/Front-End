import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';

import Header from '../Header';

const CreatorViewingPage = (props) => {

  const api = "https://wanderlustbw.herokuapp.com/experiences/organizer/name/test1";

  const {experiences, setExperiences} = useState([{
    id: 1,
    name: "Preview Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "09/23/2019",
    duration: 1,
    location_id: 1,
    completed: false
  }]);

  useEffect(() => {
    axios.get(api)
    .then(response => {
      console.log(response)
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
const Experience = styled.div`
  background-color: white;
  width: 50%;
  max-width: 750px;
  margin: 5% auto;
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
    {/* {
      experiences.map((experience) => {
        return (
          <ExperienceList>Experience</ExperienceList>
          )
      })
    } */}
    </>
  );
};

export default CreatorViewingPage;