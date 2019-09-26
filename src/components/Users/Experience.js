import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import UserSaved from "./UserSaved"

const Experience = (props) => {
  
  const [id, setId] = useState()
  const [name, setName] = useState("")


  useEffect(() => {
    //   console.log(props.organizerID)
    axiosWithAuth()
      .get(`https://wanderlustbw.herokuapp.com/exp/experience/1`)
      .then(response => {
        console.log(`EXPRNC`, response.data)
        setId(response.data.id)
        setName(response.data.name)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
         <UserSaved id={id} name={name}/>
    
    </div>
  );
};

export default Experience;
