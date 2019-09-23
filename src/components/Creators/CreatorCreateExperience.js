import React, {useState} from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Header';

const CreatorCreateExperienceForm = (props) => {

  const dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  const today = month + "-" + day + "-" + year;

  const [experience, setExperience] = useState(
    {
      name: "",
      description: "",
      date: "",
      duration: 0,
      location_id: 0,
      completed: false
    }
  );

  const handleChange = e => {
    setExperience({...experience, [e.target.name]: e.target.value});
  }

  const NewExperience = styled.div`
    background-color: white;
    width: 50%;
    max-width: 750px;
    margin: 10% auto;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  `;
  const Form = styled.form`
    display:flex;
    flex-direction:column;
  `;
  const Label = styled.label`
    margin: 8px 0 3px;
  `;
  const Input = styled.input`
    padding: 5px 10px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  `;
  const Description = styled.textarea`
    height: 150px;
    padding: 5px 10px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  `;
  const DateDurLoc = styled.div`
    display:flex;
    justify-content: space-around;
  `;
  const Col = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const SmallInput = styled.input`
    width: 70%;
    padding: 0px 10px;
    margin: 0 20px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  `;
  const ButtonSpan = styled.span`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;
  const Button = styled.button`
    width: 100px;
    padding: 5px 20px;
    margin: 30px 10px;
    border-radius: 10px;
  `;

  return (
    <>
      <Header/>
      <NewExperience>
        <h2>Create a New Experience</h2>
        <Form>
          <Label for="name">Title:</Label>
          <Input
            type="text"
            name="name"
            placeholder="Experience Title"
            value={experience.name}
            onChange={handleChange}
          />
          <Label for="description">Description:</Label>
          <Description name="description" placeholder="Experience Description" value={experience.description} onChange={handleChange} />
          <DateDurLoc>
            <Col>
            <Label for="date">Date:</Label>
              <SmallInput
                type="datetime"
                name="date"
                placeholder={today}
                value={experience.date}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Label for="duration">Duration in hours: </Label>
                <SmallInput
                type="number"
                name="duration"
                value={experience.duration}
                onChange={handleChange}
              />
          </Col>
            <Col>      
              <Label for="location">Location: </Label>
              <SmallInput
                type="number"
                name="location"
                value={experience.location_id}
                onChange={handleChange}
              />
            </Col>
          </DateDurLoc>
          <ButtonSpan>
            <Button type="submit">Save</Button>
            <Link to="/creator-viewing-page"><Button>Return</Button></Link>
          </ButtonSpan>
        </Form>
      </NewExperience>
    </>
  );
};

export default CreatorCreateExperienceForm;