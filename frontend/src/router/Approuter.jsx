import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Dentist from "../pages/Dentist";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import OneDoctor from "../pages/OneDoctor";
import Privacy from "../pages/Privacy";

const Approuter = () => {
  return (
    <Router>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/blog" component={Blog} />
      <Route exact={true} path="/landingpage" component={LandingPage} />
      <Route exact={true} path="/privacypolicy" component={Privacy} />
      <Route exact={true} path="/contact" component={Contact} />
      <Route exact={true} path="/dentist" component={Dentist} />
      <Route path={`/dentist/:doctorname/:id`} component={OneDoctor} />
    </Router>
  );
};

export default Approuter;
