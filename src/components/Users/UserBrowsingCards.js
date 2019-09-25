//this page will not be displayed but will take in data from the User Browsing page and return it as cards
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from "reactstrap";
import styled from "styled-components";
/* good going on the reactstrap cards, Cori. They look really nice :) */
const UserBrowsingCards = props => {
  return (
    <div>
      <Row>
        <Col sm="6" lg="12">
          <Link to={`/user-browsing-page/browse-all-list/${props.key}`}>
            <Card>
              <CardImg top width="100%" src={props.image} alt={props.title} />
              <CardBody {...props.key}>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.desc}</CardSubtitle>
                <CardText>{props.loc}</CardText>
                <CardText>{props.hours}</CardText>
                <CardText>{props.date}</CardText>
              </CardBody>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserBrowsingCards;
