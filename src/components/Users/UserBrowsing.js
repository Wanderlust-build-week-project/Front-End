import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import axios from 'axios'
import UserBrowsingCards from './UserBrowsingCards';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { AnimatedProps } from '@react-spring/animated';
import { Route } from "react-router-dom";
import Header from "../Header";
import BrowserCarousel from "./BrowserCarousel";
import UserExperience from "./UserExperience";
import styled from "styled-components";
import splashPhotos from "../../images/gerneral-landing-images/unSplashData";
import './UserBrowsing.css';
import SearchResults from './SearchResults';

const UserBrowsing = props => {
    const [browser, setBrowser] = useState([]);
    const [search, setSearch] = useState({
      searchTerm: ""
    })
    const [foundItems, setFoundItems] = useState([])

  /* will do get requests for organizers and experiences to set these states below
   working on this at night, currently not able to axiosWithAuth, will troubleshoot with backend tomorrow 
 */
  /* path to photos tripsData.map(trip=> trip.urls.small) sizes can also be full, raw, regular or thumb IF you know how to map over a nested array (I don't).*/
  const [tripsData, setTripsData] = useState([{}]);
  /* I copy/pasted 50 small photos from console.log(tripsData) put them in images/generalLandingImages/unSplash.js imported to this file. we can use these outdoor photos in conjuntion with 2nd index paramater on map. They are the same order as tripsData */
  const [slpashImages, setSplashImages] = useState(splashPhotos);

  /* useEffect(() => {
tripsData.map((trip, index) => {
  let smallImg = trip.urls;
  setSplashImages([...slpashImages, smallImg]);
  console.log("splash: ", slpashImages);
});
}, []); */

  useEffect(() => {
    console.log(`this is the problem`)
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
    // console.log(search)
    setSearch({searchTerm: e.target.value});
  }

  const submitSearch = e => {
    e.preventDefault();
    axiosWithAuth()
    .get(`https://wanderlustbw.herokuapp.com/exp`)
    .then(res => {
      // console.log(res.data)
      res.data.map(item => {
        // console.log(item) 
        var re = new RegExp(search.searchTerm, 'gi');
        // console.log(`this is item.name`, item.name)
        // console.log(`this is search`, re)
        var check = item.name.match(re)
        // console.log(`this is check`, check)
        if (check) {
          
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
      <div className = "searchForm">
        <form onSubmit = {submitSearch}>
          <input
              type = "text"
              placeholder = "Search Experiences"
              onChange = {(e) => handleChange(e)}
              value = {search.searchTerm}
              >
            </input>
          </form>
      </div>
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