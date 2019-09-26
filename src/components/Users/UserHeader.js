import React from "react";
import { Link, Route } from "react-router-dom";
import UserBrowsingCards from './Users/UserBrowsingCards';

export default function Header() {

  const handleLogout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    return "";
  };

  return (
    <>
      <div className="header">
        <Link to="/user-landing-page"><h2 className="title">Wanderlust</h2></Link>
        <nav className="general-header-nav">
          <span className="link">
            <Link className="header-link" to="/creator-viewing-page">
              My Created Trips
            </Link>
          </span>
          <span className="link">
            <Link className="header-link" to="/experiences">
              Experiences
            </Link>
          </span>
          <span className="link">
            <Link className="header-link" to="https://epic-minsky-812a3d.netlify.com/index.html">
              Marketing
            </Link>
          </span>
          <span className="link" onClick={handleLogout}>
            <Link to="/login">Logout</Link>
          </span>
          <Route path="/experiences" component={UserBrowsingCards} />
        </nav>
      </div>
    </>
  );
}
