import React from "react";
import { Route, Navlink } from "react-router-dom";
function UserExperience(props) {
  /* const userX = props.images.find(
    trip => trip.id === Number(props.match.params.id)
  ); */
  console.log("props from UserEx", props);
  return (
    <div>
      <h1>I'm A user Experience</h1>
    </div>
  );
}

export default UserExperience;
