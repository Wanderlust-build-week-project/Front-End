import React, { useState, useEffect } from "react";
import axios from "axios";
import UserBrowsingCards from "./UserBrowsingCards";
import splashPhotos from "../../images/gerneral-landing-images/unSplashData";
import styled from "styled-components";

const BrowsingList = styled.div`
  border: 2px solid purple;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
`;
/* even though these say 'browser' it's actually from tripsData
  I'm using splashPhotos array for images and referencing them with index. Photos are in same order as rest of data
*/
function BrowseAllList(props) {
  return (
    <BrowsingList>
      {props.tripsData.map((browser, index) => {
        return (
          <div>
            <UserBrowsingCards
              key={browser.id}
              title={browser.alt_description}
              desc={browser.description}
              date={browser.created_at}
              hours={browser.hours}
              image={splashPhotos[index]}
            />
            <h1>I'm a browsing card!</h1>
          </div>
        );
      })}
    </BrowsingList>
  );
}
export default BrowseAllList;
