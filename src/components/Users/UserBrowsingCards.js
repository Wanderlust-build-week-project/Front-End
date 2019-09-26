
//this page will not be displayed but will take in data from the User Browsing page and return it as cards
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { NavLink, Link, Route } from "react-router-dom";
import UserExperience from "./UserExperience";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardDeck,
  Button
} from "reactstrap";
import styled from "styled-components";
/* good going on the reactstrap cards, Cori. They look really nice :) */
const UserBrowsingCards = props => {
  // console.log (props)
  const [place, setPlace] = useState({
    place: ""
  });
  const [oranizer, setOrganizer] = useState({
    oranizer: ""
  });
  useEffect(() => {
    axiosWithAuth()
      .get(`https://wanderlustbw.herokuapp.com/locations/${props.location}`)
      .then(response => {
        // console.log(`this is the display location`, response.data.location)
        setPlace({ place: response.data.location });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    //   console.log(props.organizerID)
    axiosWithAuth()
      .get(`https://wanderlustbw.herokuapp.com/organizers/${props.organizerID}`)
      .then(response => {
        // console.log(`these are the organizers`, response)
        setOrganizer({ oranizer: response.data.name });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <CardDeck>
        <Card>
          <Link to={`/user-browsing-page/browse-all-list/${props.id}`}>
            <CardImg top width="100%" src={props.image} alt={props.title} />
            <CardBody {...props.key}>
              <CardTitle>{props.title}</CardTitle>
              <CardSubtitle>{props.desc}</CardSubtitle>
              <CardText>{place.place}</CardText>
              <CardText>{props.hours}</CardText>
              <CardText>{props.date}</CardText>
              <CardText>{oranizer.oranizer}</CardText>
              <Button  onClick={() => props.history.push("/user-saved-list")}>Save This Trip!</Button>
            </CardBody>
          </Link>
        </Card>
      </CardDeck>
    </div>
  );
};
export default UserBrowsingCards;