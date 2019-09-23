import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./GeneralLandingPage.css";
import { Link } from "react-router-dom";

const Header = styled.div`
  color: white;
  font-size: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 2.5% 50px;
  background-image: linear-gradient(to right, #565f64, #eeeff3);
`;

const Button = styled.button`
  padding: 5px 40px;
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`;

const GeneralLanding = styled.div`
  border: 2px solid yellow;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GeneralLandingPage = props => {
  const [experiences, setExperiences] = useState([]);
  const routeToUserBrowsing = event => {
    event.preventDefault();
    props.history.push("/user-browsing-page");
  };
  const routeToCreateExp = event => {
    event.preventDefault();
    props.history.push("/creator-create-experiance-form");
  };
  /* https://wanderlustbw.herokuapp.com/experiences */
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      console.log("response", response.data.results);
    });
  }, []);

  return (
    <>
      <Header>
        Wanderlust
        <nav className="gerneral-header-nav">
          <Link to="/creator-update-experiance-form">Trip History</Link>
          <Link to="/creator-viewing-page">Created Trips</Link>
        </nav>
      </Header>
      <GeneralLanding>
        <h1>HI FROM GENERAL LANDING PAGE</h1>
        <div className="create-or-find">
          <div className="find-experience">
            <h2>Featured Experiences:</h2>
            <div>
              <ul>
                <li>Expericne One</li>
                <li>Experience Two</li>
                <li>Experience Three</li>
              </ul>
            </div>
            <Button onClick={routeToUserBrowsing}>Serch for more trips</Button>
          </div>
          <div className="create-own-experience">
            <h2>Create Your Own Experiecne</h2>
            <Button onClick={routeToCreateExp}>Create</Button>
          </div>
        </div>
      </GeneralLanding>
    </>
  );
};

export default GeneralLandingPage;
