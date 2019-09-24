import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./CreatorLandingPage.css";
import { NavLink, Link, Route } from "react-router-dom";
import UserBrowsingCards from "./Users/UserBrowsingCards";
import data from "../images/gerneral-landing-images/dummyData";
/* ===== styled components ======= */
const Header = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: fit-content;
  z-index: 2;
  top: 0;
  padding: 1vh 5vw;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

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

const NaviLink = styled.span`
  text-decoration: none;
  margin-left: 40px;
`;
/* ====== COMPONENT =======  */
const CreatorLandingPage = props => {
  /* ====== VARS, STATE, FUNCS ========== */

  const [experiences, setExperiences] = useState();
  const handleLogout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    return "";
  };
  /* https://wanderlustbw.herokuapp.com/experiences */
  useEffect(() => {
    setExperiences(data);
  }, [experiences]);

  // console.log("experiences data", experiences);
  /* ======= RETURN =========  */
  return (
    <>
      <Header>
        <Title>Wanderlust</Title>
        <nav className="gerneral-header-nav">
          <NaviLink>
            <Link className="header-link" to="/creator-viewing-page">
              My Created Trips
            </Link>
          </NaviLink>
          <NaviLink>
            <Link className="header-link" to="/experiences">
              Experiences
            </Link>
          </NaviLink>

          <NaviLink onClick={handleLogout}>
            <Link to="/">Logout</Link>
          </NaviLink>
          <Route path="/experiences" component={UserBrowsingCards} />
        </nav>
      </Header>
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
          <button className="learn-more">Learn More</button>
        </div>
      ))}
    </div>
  );
}
