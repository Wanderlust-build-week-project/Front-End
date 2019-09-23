import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

import Header from './Header';
import './Login.css';

const Login = (props) => {
  const [credentials, setCredentials] = useState({username: "", password: ""});

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const submitLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/');
        console.log(res)
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="login">
        <form className="form">
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
          <button className="btn">Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;