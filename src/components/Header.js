import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {

  return (
    <>
<<<<<<< HEAD
      <Bar>
        <Link to="/general-landing-page">
          <Title>Wanderlust</Title>
        </Link>
        <Nav>
          <NaviLink>
            <Link to="/">Home</Link>
          </NaviLink>
          <NaviLink> 
            <Link to="/user-browsing-page">
            Experiences</Link>
          </NaviLink>
          <NaviLink onClick={handleLogout}>
            <Link to="/">Logout</Link>
          </NaviLink>
        </Nav>
      </Bar>
=======
      <span className="header">
        <span>
          <img className="logo" src={ require ('./Creators/logo.png') } /><h2 className="title underline">Wanderlust</h2>
        </span>
        <nav>
          <span className="link">
            <a className="header-link underline" href="https://epic-minsky-812a3d.netlify.com/index.html">
              Marketing
            </a>
          </span>
          <span className="link">
            <Link className="header-link underline" to="/login">Log In</Link>
          </span>
        </nav>
      </span>
>>>>>>> ca9a7376aa6549c84b0a7af4b53a9486c4a3cc3e
    </>
  );
}
