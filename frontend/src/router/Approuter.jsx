import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";

const Approuter = () => {
  return (
    <Router>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/blog" component={Blog} />
      <Route exact={true} path="/landingpage" component={LandingPage} />
    </Router>
  );
};

export default Approuter;
