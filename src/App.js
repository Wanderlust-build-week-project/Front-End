import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import PrivateRoute from './components/PrivateRoute';
import GeneralLandingPage from './components/GeneralLandingPage';
import UserBrowsingPage from './components/Users/UserBrowsing';
import CreatorViewingPage from './components/Creators/CreatorViewingPage';
import CreatorCreateExperienceForm from './components/Creators/CreatorCreateExperience';
import CreatorUpdateExperienceForm from './components/Creators/CeatorUpdateExperience'

import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* <PrivateRoute exact path="/general-landing-page" component={GeneralLandingPage}/> */}
        <Route exact path= "/general-landing-page" component={GeneralLandingPage}/>
        <Route exact path= "/user-browsing-page" component={UserBrowsingPage} />
        <Route exact path = "/creator-viewing-page" component = {CreatorViewingPage} />
        <Route exact path = "/creator-create-experiance-form" component = {CreatorCreateExperienceForm} />
        <Route exact path = "/creator-update-experiance-form" component = {CreatorUpdateExperienceForm} />
      </div>
    </Router>
  );
}

export default App;
