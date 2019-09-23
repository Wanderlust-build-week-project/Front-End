import React, {useState} from "react";
import axios from 'axios';

import Header from './Header';
import './Login.css';

const Login = (props) => {
  const [credentials, setCredentials] = useState({username: "", password: ""});

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const submitLogin = e => {
    e.preventDefault();
    var cont = document.getElementById('checkIfOrganizerLogin').children;
    if (cont.checked) {
        loginOrganizer();
    } else {
        loginUser();
    }
  }

  const loginUser = () => {
    axios
      .post('https://wanderlustbw.herokuapp.com/auth/guests/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push("/general-landing-page");
        // console.log('this is the res', res.data.token)
      })
      .catch(err => console.log(err));
  };


  const loginOrganizer = () => {
    axios
      .post('https://wanderlustbw.herokuapp.com/auth/organizers/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push("/general-landing-page");
        // console.log('this is the res', res.data.token)
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="login">
        <form className="form" onSubmit = {submitLogin}>
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
          <div id = "checkIfOrganizerLogin" className = "are-you">
            <label for = "creator">Are you an Organizer?</label>
            <input type = "checkbox" id = "creator" name = "creatorCheckbox" />
          </div>
          <button className="btn">Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;