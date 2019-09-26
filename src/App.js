import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import PrivateRoute from './components/PrivateRoute';
import GeneralLandingPage from "./components/GeneralLandingPage";
import CreatorLandingPage from "./components/CreatorLandingPage";
import UserBrowsingPage from "./components/Users/UserBrowsing";
import CreatorViewingPage from "./components/Creators/CreatorViewingPage";
import CreatorCreateExperienceForm from "./components/Creators/CreatorCreateExperience";
import CreatorUpdateExperienceForm from "./components/Creators/CeatorUpdateExperience";
import ChooseLocation from './components/Creators/ChooseLocation';
import SearchResults from './components/Users/SearchResults';
import PrivateRoute from './components/PrivateRoute';

import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/general-landing-page" component={GeneralLandingPage} />
        <PrivateRoute path="/creator-landing-page" component={CreatorLandingPage} />
        <PrivateRoute path="/user-browsing-page" component={UserBrowsingPage} />
        <PrivateRoute
          exact
          path="/creator-viewing-page"
          component={CreatorViewingPage}
        />
        <PrivateRoute
          path="/creator-create-experience-form"
          component={CreatorCreateExperienceForm}
        />
        <PrivateRoute
          path="/creator-update-experience-form"
          component={CreatorUpdateExperienceForm}
        />
         <PrivateRoute
          path="/choose-location"
          component={ChooseLocation}
        />
        <PrivateRoute
          path="/search-results"
          component={SearchResults}
        />
      </div>
    </Router>
  );
}

export default App;
