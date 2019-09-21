import React from "react";
import {Link} from 'react-router-dom'

const GeneralLandingPage = (props) => {


  return (
    <>
    General Landing Page 
    -this page will have a blurb  about us and links to the User Browsing page and the Creator Viewing pages
    <Link to = "/user-browsing-page">User</Link>
    <Link to = "/creator-viewing-page">Creator</Link>
    </>
  );
};

export default GeneralLandingPage;