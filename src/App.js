import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import PrivateRoute from './components/PrivateRoute';
import GeneralLandingPage from "./components/GeneralLandingPage";
import UserBrowsingPage from "./components/Users/UserBrowsing";
import CreatorViewingPage from "./components/Creators/CreatorViewingPage";
import CreatorCreateExperienceForm from "./components/Creators/CreatorCreateExperience";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SignUp} />
        <Route 
          exact path="/login" 
          component={Login} 
          />
        {/* <PrivateRoute exact path="/general-landing-page" component={GeneralLandingPage}/> */}
        <Route
          path="/general-landing-page"
          component={GeneralLandingPage}
        />
        <Route 
          exact path="/user-browsing-page" 
          component={UserBrowsingPage} />
        <Route
          exact
          path="/creator-viewing-page"
          component={CreatorViewingPage}
        />
        <Route
          path="/creator-create-experience-form"
          component={CreatorCreateExperienceForm}
        />
      </div>
    </Router>
  );
}

export default App;
