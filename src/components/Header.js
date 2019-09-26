import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {

  return (
    <>
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
    </>
  );
}
