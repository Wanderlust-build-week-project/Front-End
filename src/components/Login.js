import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import styled, {createGlobalStyle} from 'styled-components';
import './Login.css';
import { bgBlack } from "ansi-colors";

const Login = (props) => {
  const [credentials, setCredentials] = useState({username: "", password: ""});

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const Header = styled.div`
    color: white;
    font-size: 3rem;
    width: 100%;
    height: 10vh;
    padding: 2.5% 50px;
    background-image: linear-gradient(to right, #565f64, #eeeff3);
  `;

  const Login = styled.div`
    position: absolute;
    right: 200px;
    top: 20%;
    width: 40%;
    max-width: 500px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 50px 0 30px;
    width: 100%;
  `;

  const Input  = styled.input`
    padding: 5px 10px;
    margin: 10px auto;
    width: 50%;
    border-radius: 10px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  `;

  const Button = styled.button`
    padding: 5px 40px;
    margin: 10px auto;
    border-radius: 10px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  `;


//   const login = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post('', credentials)
//       .then(res => {
//         localStorage.setItem('token', res.data.payload);
//         props.history.push('/');
//         console.log(res)
//       })
//       .catch(err => console.log(err));
//   };


  return (
    <>
      <Header>Wanderlust</Header>
      <Login>
        <Form>
          <Input
          type="text"
          name="username"
          placeholder = "User Name"
          value={credentials.username}
          onChange={handleChange}
          />
          <Input
          type="password"
          name="password"
          placeholder = "Password"
          value={credentials.password}
          onChange={handleChange}
          />
          <Button>Log in</Button>
        </Form>
      </Login>
    </>
  );
};

export default Login;