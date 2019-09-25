import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import axios from 'axios'
import UserBrowsingCards from './UserBrowsingCards';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { Search } from 'semantic-ui-react';
import { AnimatedProps } from '@react-spring/animated';
import { Route } from "react-router-dom";
import Header from "../Header";
import BrowserCarousel from "./BrowserCarousel";
import UserExperience from "./UserExperience";
import styled from "styled-components";
import splashPhotos from "../../images/gerneral-landing-images/unSplashData";

const UserBrowsing = props => {
    const [browser, setBrowser] = useState([]);
    const [search, setSearch] = useState("")
  /* will do get requests for organizers and experiences to set these states below
   working on this at night, currently not able to axiosWithAuth, will troubleshoot with backend tomorrow 
 */
  /* path to photos tripsData.map(trip=> trip.urls.small) sizes can also be full, raw, regular or thumb IF you know how to map over a nested array (I don't).*/
  const [tripsData, setTripsData] = useState([{}]);
  /* I copy/pasted 50 small photos from console.log(tripsData) put them in images/generalLandingImages/unSplash.js imported to this file. we can use these outdoor photos in conjuntion with 2nd index paramater on map. They are the same order as tripsData */
  const [slpashImages, setSplashImages] = useState(splashPhotos);

  // unsplash API get
  //Greg's api key for unsplash. rate limit 50 request/hr
  const APIKey =
    "87bd86fadbc47436e983dd82ec6c282a4d0a502f71262a7b9631d0ac0b204bca";
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=outdoors&per_page=50&client_id=${APIKey}`
      )
      .then(response => {
        const results = response.data.results;

        /* console.log("unsplash results", results); */
        setTripsData(results);
      })
      .catch(error => {
        console.log("Whoops from UserBrowsing.js", error);
      });
  }, []);

  console.log("trips", tripsData);

  /* useEffect(() => {
tripsData.map((trip, index) => {
  let smallImg = trip.urls;
  setSplashImages([...slpashImages, smallImg]);
  console.log("splash: ", slpashImages);
});
}, []); */

  useEffect(() => {
    axiosWithAuth()
      .get(`https://wanderlustbw.herokuapp.com/exp`)
      .then(res => {
        setBrowser(res.data)
        // console.log(res)
      })
      .catch(err => console.log('Loading Error Experinces', err))
  }, [])
  // ^ for cards

  const handleChange = e => {
    setSearch({...search, [e.target.name]: e.target.value});
  }

  const submitSearch = e => {
    e.preventDefault();
    axiosWithAuth()
    .get(`https://wanderlustbw.herokuapp.com/exp`)
    .then(res => {
      // console.log(res.data)
      res.data.map(item => {
        // console.log(item)
        console.log(`this is item.name`, JSON.stringify(item.name))
        console.log(`this is search`, search.search)
        var check = item.name.match(JSON.stringify(/Hike/gi))
        console.log(`this is check`, check)
        if (check) {
          console.log('found')
          // props.history.push(`/search-results/${item.id}`)
        } else {
          console.log('not found')
        }
      })
    })
    .catch(err => console.log('Loading Error Experinces', err))
  }

  const UserBrowsingWrapper = styled.div`
  position: relative;
  top: 10vh;
  `;

  const BrowseAllListWrapper = styled.div`
    /* border: 2px solid yellow; */
    text-align: center;
    `;

  const Button = styled.button`
    padding: 5px 40px;
    margin: 10px auto;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
      0 2px 4px rgba(0, 0, 0, 0.24);
`;
  return (
    <>
    <UserBrowsingWrapper>
      <Header />

      <BrowserCarousel />
      <BrowseAllListWrapper>
        <div>
        {browser.map(browse => {
          return (
            <UserBrowsingCards 
              id = {browse.id}
              desc={browse.description}
              title={browse.name}
              hours={browse.duration}
              date={browse.date}
              completed ={browse.complted}
              organizerID ={browse.organizer_id}
              location ={browse.location_id}
            />)
        })}
        <form onSubmit = {submitSearch}>
          <input
            name = "search"
            type = "text"
            placeholder = "Search Experiences"
            onChange = {handleChange}
            >
          </input>
        </form>
      </div>
        <Route
          path="/user-browsing-page/browse-all-list/:id"
          render={props => (
            <UserExperience
              {...props}
              tripsData={tripsData}
              images={slpashImages}
            />
          )}
        />
      </BrowseAllListWrapper>
    </UserBrowsingWrapper>
    </>
  );
}

export default UserBrowsing