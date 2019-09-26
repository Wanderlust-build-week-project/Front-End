import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import UserSaved from "./UserSaved"

const Experience = (props) => {
  const [exprnc, setExprnc] = useState([{}]);

  useEffect(() => {
    //   console.log(props.organizerID)
    axiosWithAuth()
      .get(`https://wanderlustbw.herokuapp.com/organizers/${props.organizerID}`)
      .then(response => {
        // console.log(`these are the organizers`, response)
        setExprnc({ experience: response.data.name });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // const saveExpr = () => {
  //   const addToSaved = props.addToSaved;
  //   addToSaved(exprnc);
  // };

  // if (!exprnc) {
  //   return <div>Loading Trip information...</div>;
  // }


  return (
    <div>
      <UserSaved />
    </div>
  );
};

export default Experience;
