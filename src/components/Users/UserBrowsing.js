import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";
import UserBrowsingCards from "./UserBrowsingCards";
import { Gallery, GalleryImage } from "react-gesture-gallery";
//Greg's api key for unsplash. rate limit 50 request/hr
const APIKey =
  "87bd86fadbc47436e983dd82ec6c282a4d0a502f71262a7b9631d0ac0b204bca";
const UserBrowsing = () => {
  /* path to photos tripsData.map(trip=> trip.urls.small) sizes can also be full, raw, regular or thumb 
    we can use these outdoor photos as dummy photos randomly in conjuntion with whatever details from our database
  */
  const [tripsData, setTripsData] = useState([{}]);
  /* will do get requests for organizers and experiences to set these states below
    working on this at night, currently not able to axiosWithAuth, troubleshoot tomorrow
  */
  const [organizers, setOrganizers] = useState([{}]);
  const [experiences, setExperiences] = useState([{}]);

  /*  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=outdoors&per_page=50&client_id=${APIKey}`
      )
      .then(response => {
        const results = response.data.results;
        console.log("unsplash results", results);
        setTripsData(results);
      })
      .catch(error => {
        console.log("Whoops from UserBrowsing.js", error);
      });
  }, []);
  //^ for cards
  console.log("trips", tripsData); */
  return (
    <>
      <h1>HELLOS USER BROWSING</h1>
    </>
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
