import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = (props) => {
  const [credentials, setCredentials] = useState({username: "", password: ""});

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

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
      <form>
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
        <button>Log in</button>
    </form>
    </>
  );
};

export default Login;