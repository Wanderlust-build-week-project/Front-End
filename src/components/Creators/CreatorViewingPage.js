import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';
import styled from 'styled-components';

import Header from '../Header';
import Card from './CreatorViewingCards';
import './CVP.css';

const CreatorViewingPage = (props) => {

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

  const NaviLink = styled.span`
    text-decoration: none;
    margin-left: 40px;
  `;

  const handleLogout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    return "";
  };

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
    console.log(id)
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
        </nav>
      </Header>
      <div className="titlebar">
        <span className="title">Your Experiences</span>
        <span><Link to="/choose-location"><button className="create-new">Create New</button></Link></span>
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