import React from 'react';
import styled from 'styled-components';
//this page will not be displayed but will take in data from the Creator Browsing page and return it as cards

export default function(props) {
    
    const Card = styled.div`
    background-color: white;
    width: 50%;
    max-width: 750px;
    margin: 5% auto;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
    `;
    

    const ExperienceHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    `;

    const Title = styled.span`
    font-size: 2rem;
    font-weight: strong;
    `;

    const Location = styled.span`
    font-size: 1rem;
    font-weight: em;
    `;

    const Icons = styled.span`
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    `;

    const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    border: 1px solid silver;
    border-radius: 5px;
    `;

    return (
        <Card>
            <ExperienceHeader>
                <Title>{props.name}</Title>
                <Location>{props.location_id}</Location>
                <Icons>
                    <span><Button>&#9998;</Button></span>
                    <span><Button>&#128465;</Button></span>
                </Icons>
            </ExperienceHeader>
            <hr></hr>
            <ExperienceHeader>
                <span>Date: {props.date}</span>
                <span>Duration: {props.duration} hours</span>
            </ExperienceHeader>
            <hr></hr>
            <p>{props.description}</p>
        </Card>
    )
}