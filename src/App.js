import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import PrivateRoute from './components/PrivateRoute';
import GeneralLandingPage from "./components/GeneralLandingPage";
import CreatorLandingPage from "./components/CreatorLandingPage";
import UserBrowsingPage from "./components/Users/UserBrowsing";
import CreatorViewingPage from "./components/Creators/CreatorViewingPage";
import CreatorCreateExperienceForm from "./components/Creators/CreatorCreateExperience";
import CreatorUpdateExperienceForm from "./components/Creators/CeatorUpdateExperience";
import ChooseLocation from "./components/Creators/ChooseLocation";
import SearchResults from "./components/Users/SearchResults";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
<<<<<<< HEAD
        <Route path="/general-landing-page" component={GeneralLandingPage} />
        <Route path="/creator-landing-page" component={CreatorLandingPage} />
        <Route path="/user-browsing-page" component={UserBrowsingPage} />
        <Route
=======
        <PrivateRoute path="/general-landing-page" component={GeneralLandingPage} />
        <PrivateRoute path="/creator-landing-page" component={CreatorLandingPage} />
        <PrivateRoute path="/user-browsing-page" component={UserBrowsingPage} />
        <PrivateRoute
>>>>>>> eaa7755252c721e6d34c662a8f4fb6369082563f
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
<<<<<<< HEAD
        <Route path="/choose-location" component={ChooseLocation} />
        <Route path="/search-results" component={SearchResults} />
=======
         <PrivateRoute
          path="/choose-location"
          component={ChooseLocation}
        />
        <PrivateRoute
          path="/search-results"
          component={SearchResults}
        />
>>>>>>> eaa7755252c721e6d34c662a8f4fb6369082563f
      </div>
    </Router>
  );
}

export default App;
