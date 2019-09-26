import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./GeneralLandingPage.css";
import { NavLink, Link, Route } from "react-router-dom";
import UserBrowsingCards from "./Users/UserBrowsingCards";
import data from "../images/gerneral-landing-images/dummyData";
import UserSaved from "../components/Users/UserSaved";
import Experience from "./Users/Experience";
import Header from "../components/Users/UserHeader";

/* ===== styled components ======= */

const Button = styled.button`
  padding: 5px 40px;
  margin: 10px auto;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`;

const GeneralLanding = styled.div`
  /* border: 2px solid yellow; */
  width: 100%;
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

const Today = styled.h3`
  font-size: 2rem;
  color: white;
`;

/* ====== COMPONENT =======  */
const GeneralLandingPage = props => {
  /* ====== VARS, STATE, FUNCS ========== */
  console.log(props);

  const [experiences, setExperiences] = useState();

  /* https://wanderlustbw.herokuapp.com/experiences */
  useEffect(() => {
    setExperiences(data);
  }, [experiences]);

  // console.log("experiences data", experiences);
  /* ======= RETURN =========  */
  return (
    <>
      <Header />
      <GeneralLanding>
        <div className="create-or-find">
          <div className="featured-experiences">
            <Today>Today's Featured Experiences:</Today>
            <div>
              <FeaturedTrips />
            </div>
          </div>
          <div className="create-or-find-btns">
            <div className="search-trips-btn">
              <h3>Check out more awesome adventures!</h3>
              <Button onClick={() => props.history.push("/user-browsing-page")}>
                Search for more trips
              </Button>
            </div>
            <div className="become-a-creator">
              <h3>Want to host your own tour? </h3>
              <Button onClick={() => props.history.push("/")}>
                Become a Trip Creator
              </Button>
            </div>
          </div>
        </div>
      </GeneralLanding>
      <div>
        <Experience />
      </div>
    </>
  );
};

export default GeneralLandingPage;

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
