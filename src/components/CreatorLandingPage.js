import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./CreatorLandingPage.css";
import { NavLink, Link, Route } from "react-router-dom";
import UserBrowsingCards from "./Users/UserBrowsingCards";
import data from "../images/gerneral-landing-images/dummyData";
import Header from './Creators/CreatorHeader.js';

/* ===== styled components ======= */

const Button = styled.button`
  padding: 5px 40px;
  margin: 10px auto;
  width: 200px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`;

const CreatorLanding = styled.div`
  /* border: 2px solid yellow; */
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: fit-content;
  padding: 30px;
  top: 15vh;
  background: rgba(0, 0, 0, 0.5);
  color: white;
`;
/* ====== COMPONENT =======  */
const CreatorLandingPage = props => {
  /* ====== VARS, STATE, FUNCS ========== */

  const [experiences, setExperiences] = useState();
  
  /* https://wanderlustbw.herokuapp.com/experiences */
  useEffect(() => {
    setExperiences(data);
  }, [experiences]);

  // console.log("experiences data", experiences);
  /* ======= RETURN =========  */
  return (
    <>
      <Header/>
      <CreatorLanding>
        <div className="create-or-find">
          <div className="create-btn-container">
            <Button onClick={() => props.history.push("/creator-viewing-page")}>
              Create New Trip
            </Button>
          </div>

          <div className="featured-experiences">
            <h2>Featured trips from other guides: </h2>
            <div>
              <FeaturedTrips />
            </div>
          </div>
        </div>
      </CreatorLanding>
    </>
  );
};

export default CreatorLandingPage;

function FeaturedTrips() {
  return (
    <div className="featured-trips-wrapper">
      {data.map(trip => (
        <div className="trip-card" key={trip.id}>
          <h3>Adventure: {trip.name}</h3>
          <img src={trip.image_url} alt="" />
          <Link to="user-browsing-page">
          <button className="learn-more">Learn More</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
