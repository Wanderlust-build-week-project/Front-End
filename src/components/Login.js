import React, { useState } from "react";
import axios from "axios";

import Header from "./Header";
import "./Login.css";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitLogin = e => {
    e.preventDefault();
    var cont = document.getElementById("creator");
    // console.log(cont)
    if (cont.checked) {
      loginOrganizer();
      // console.log(`organizer logged in`)
    } else {
      loginUser();
      // console.log(`guest logged in`)
    }
  };

  const loginUser = () => {
    axios
      .post("https://wanderlustbw.herokuapp.com/auth/guests/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        axiosWithAuth()
          .get(
            `https://wanderlustbw.herokuapp.com/guests/username/${credentials.username}`
          )
          .then(res2 => {
            console.log("this is the second responce guest", res2.data.id);
            localStorage.setItem("userID", res2.data.id);
            props.history.push(`/general-landing-page`);
          });
      })
      .catch(err => console.log(err));
  };

  const loginOrganizer = () => {
    axios
      .post(
        "https://wanderlustbw.herokuapp.com/auth/organizers/login",
        credentials
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // console.log('this is the res', res.data.token)
        axiosWithAuth()
          .get(
            `https://wanderlustbw.herokuapp.com/organizers/username/${credentials.username}`
          )
          .then(res2 => {
            console.log("this is the second responce organizer", res2.data.id);
            localStorage.setItem("userID", res2.data.id);
            props.history.push(`/creator-landing-page`);
          });
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="login">
        <form className="form" onSubmit={submitLogin}>
          <input
            className="input"
            type="text"
            name="username"
            placeholder="User Name"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <div id="checkIfOrganizerLogin" className="are-you">
            <label htmlFor="creator">Are you an Organizer?</label>
            <input type="checkbox" id="creator" name="creatorCheckbox" />
          </div>
          <button className="btn">Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
