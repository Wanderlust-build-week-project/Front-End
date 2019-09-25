import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";
import Header from "../Header";
import BrowserCarousel from "./BrowserCarousel";
import BrowseAllList from "./BrowseAllList";
import UserExperience from "./UserExperience";
import styled from "styled-components";
import splashPhotos from "../../images/gerneral-landing-images/unSplashData";

const UserBrowsingWrapper = styled.div`
  position: relative;
  top: 10vh;
`;

const Button = styled.button`
  padding: 5px 40px;
  margin: 10px auto;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`;
const BrowseAllListWrapper = styled.div`
  /* border: 2px solid yellow; */
  text-align: center;
`;

const UserBrowsing = props => {
  // GALLERY
  /* will do get requests for organizers and experiences to set these states below
   working on this at night, currently not able to axiosWithAuth, will troubleshoot with backend tomorrow 
 */
  const [organizers, setOrganizers] = useState([{}]);
  const [experiences, setExperiences] = useState([{}]);
  /* path to photos tripsData.map(trip=> trip.urls.small) sizes can also be full, raw, regular or thumb IF you know how to map over a nested array (I don't).*/
  const [tripsData, setTripsData] = useState([{}]);
  /* I copy/pasted 50 small photos from console.log(tripsData) put them in images/generalLandingImages/unSplash.js imported to this file. we can use these outdoor photos in conjuntion with 2nd index paramater on map. They are the same order as tripsData */
  const [slpashImages, setSplashImages] = useState(splashPhotos);
  /* didn't realy use browsers not sure about the data structure of it, but I kept the same naming convention in brows all list in case we revert back to this data. Someone can fill me in */
  const [browsers, setBrowsers] = useState([{}]);

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

  const routeToBrowsAll = event => {
    event.preventDefault();
    props.history.push("/user-browsing-page/browse-all-list");
  };

  /* console.log("props form UserB: ", props); */
  return (
    <UserBrowsingWrapper>
      <Header />

      <BrowserCarousel />
      <BrowseAllListWrapper>
        <Button id="showAll" onClick={routeToBrowsAll}>
          Check out All Experinces
        </Button>

        <Route
          exact
          path="/user-browsing-page/browse-all-list"
          render={props => <BrowseAllList {...props} tripsData={tripsData} />}
        />
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
  );
};
export default UserBrowsing;

/* ====================OLD CODE =====================================
    ====================OLD CODE =====================================
    ====================OLD CODE =====================================
    ====================OLD CODE =====================================


const INITIAL_INDEX = 0;
  const images = [
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1001/300/300",
    "https://picsum.photos/id/1005/300/300",
    "https://picsum.photos/id/1023/300/300"
  ];
  const [browser, setBrowser] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval =
      (() => {
        if (index === images.length - 1) {
          setIndex(INITIAL_INDEX);
        } else {
          setIndex(index + 1);
        }
      },
      2500);
    return () => clearInterval(interval);
  }, [index]);
  //^ for gallery state

  useEffect(() => {
    axios
      .get(`https://wanderlustbw.herokuapp.com/exp/experience/${index}`)
      .then(res => {
        setBrowser(res);
        console.log(res);
      })
      .catch(err => console.log("Loading Error Experinces", err));
  }, [index]);
  //^ for cards

  return (
    <>
      <Gallery
        index={index}
        onRequestChage={i => {
          setIndex(i);
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit="contain" src={image} />
        ))}
      </Gallery>
      <div>
        <button>Check out All Experinces</button>
        {browser.map(browse => {
          return (
            <div>
              <UserBrowsingCards
                key={browse.id}
                title={browse.title}
                desc={browse.description}
                date={browse.date}
                hours={browse.hours}
              />
              <h1>I'm a browsing card!</h1>
            </div>
          );
        })}
      </div>
    </>
  );





*/
