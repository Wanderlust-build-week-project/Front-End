import React from "react";
import { Link } from "react-router-dom";
import './UserHeader.css';

export default function Header() {

  const handleLogout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    return "";
  };

  return (
    <>
      <span className="header">
        <span>
          <img className="logo" src={ require ('../Creators/logo.png') } /><Link to="/general-landing-page"><h2 className="title underline">Wanderlust</h2></Link>
        </span>
        <nav>
          <span className="link">
            <Link className="header-link underline" to="/user-browsing-page">
              My Trip History
            </Link>
          </span>
          <span className="link">
            <Link className="header-link underline" to="/user-browsing-page">
              Experiences
            </Link>
          </span>
          <span className="link">
            <a className="header-link underline" href="https://epic-minsky-812a3d.netlify.com/index.html">
              Marketing
            </a>
          </span>
          <span className="link" onClick={handleLogout}>
            <Link className="header-link underline" to="/login">Logout</Link>
          </span>
        </nav>
      </span>
    </>
  );
}
