import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import Header from './Header';
import './SignUp.css';

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({username: null, password: null, name: null});

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

//   const SignUp = styled.div`
//     position: absolute;
//     right: 200px;
//     top: 20%;
//     width: 40%;
//     max-width: 500px;
//     background-color: white;
//     border-radius: 20px;
//     box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
//   `;

//   const Form = styled.form`
//     display: flex;
//     flex-direction: column;
//     padding: 50px 0 30px;
//     width: 100%;
//   `;

//   const Input  = styled.input`
//     padding: 5px 10px;
//     margin: 10px auto;
//     width: 50%;
//     border-radius: 10px;
//     box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
//   `;

  const Button = styled.button`
    padding: 5px 40px;
    margin: 10px auto;
    border-radius: 10px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  `;


  const submitSignUp = e => {
    e.preventDefault();
    if (credentials.username && credentials.password && credentials.name) {
        axiosWithAuth()
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


  return (
    <>
      {/* <Header /> */}
        {/* <Form onSubmit = {handleSignUp}> */}
        <form onSubmit = {submitSignUp}>
          <input
          type="text"
          name="username"
          placeholder = "User Name"
          value={credentials.username}
          onChange={handleChange}
          />
          <input
          type="password"
          name="password"
          placeholder = "Password"
          value={credentials.password}
          onChange={handleChange}
          />
          <input
          type="text"
          name="name"
          placeholder = "Name"
          value={credentials.name}
          onChange={handleChange}
          />
          Already Have an account?
          <Link to = "/login" >Log in here</Link>
          <Button>Sign Up</Button>
        {/* </Form> */}
        </form>
    </>
  );
};

export default SignUp;