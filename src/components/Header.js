import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {

  return (
    <>
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
    </>
  );
}
