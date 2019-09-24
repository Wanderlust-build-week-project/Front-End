import React, {useState} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'

import Header from './Header';
import './SignUp.css';

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({username: null, password: null, name: null});

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const submitSignUp = e => {
    e.preventDefault();
    var cont = document.getElementById('creator');
    // console.log(cont)
    if (cont.checked) {
        createOrganizer();
        // console.log(`organizer created`)
    } else {
        createUser();
        // console.log(`guest created`)
    }
  }

  const createUser = () => {
    if (credentials.username && credentials.password && credentials.name) {
        axios
        .post('https://wanderlustbw.herokuapp.com/auth/guests/register', credentials)
        .then(res => {
        //   localStorage.setItem('token', res.data.payload);
          props.history.push('/login');
          console.log(res)
        })
        .catch(err => console.log(err));
    } else {
        console.log("invalid")
    }
  };

  const createOrganizer = () => {
    if (credentials.username && credentials.password && credentials.name) {
        axios
        .post('https://wanderlustbw.herokuapp.com/auth/organizers/register', credentials)
        .then(res => {
        //   localStorage.setItem('token', res.data.payload);
          props.history.push('/login');
          console.log(res)
        })
        .catch(err => console.log(err));
    } else {
        console.log("invalid")
    }
  };


  return (
    <>
      <Header />
      <div className="signup">
        <form className="form" onSubmit = {submitSignUp}>
          <input className="input"
            type="text"
            name="username"
            placeholder = "User Name"
            value={credentials.username}
            onChange={handleChange}
          />
          <input className="input"
            type="password"
            name="password"
            placeholder = "Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <input className="input"
            type="text"
            name="name"
            placeholder = "Name"
            value={credentials.name}
            onChange={handleChange}
          />
          <div id = "checkIfOrganizerSignUp" className = "are-you">
            <label htmlFor = "creator">Are you an Organizer?</label>
            <input type = "checkbox" id = "creator" name = "creatorCheckbox" />
          </div>
          <p className="already">Already Have an account?</p>
          <Link className="redirect" to = "/login" >Log in here</Link>
          <button className="btn">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;