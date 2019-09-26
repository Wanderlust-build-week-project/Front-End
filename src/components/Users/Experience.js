import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import UserSaved from "./UserSaved"

const Experience = (props) => {
  const [exprnc, setExprnc] = useState([{}]);

  useEffect(() => {
    //   console.log(props.organizerID)
    axiosWithAuth()
      .get(`https://wanderlustbw.herokuapp.com/exp/experience/1`)
      .then(response => {
        console.log(`EXPRNC`, response)
        setExprnc(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // const saveExpr = () => {
  //   const addToSaved = props.addToSaved;
  //   addToSaved(exprnc);
  // };


  return (
    <div>
      {exprnc.map(saved => (
        <UserSaved
      ))}
     
    </div>
  );
};

export default Experience;
