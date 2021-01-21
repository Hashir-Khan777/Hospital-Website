import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminLogin from "../components/AdminLogin";
import Appointment from "../components/Appointment";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import DentalEmergency from "../pages/DentalEmergency";
import Dentist from "../pages/Dentist";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import OneDoctor from "../pages/OneDoctor";
import Privacy from "../pages/Privacy";
import Services from "../pages/Services";

const Approuter = () => {
  return (
    <Router>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/blog" component={Blog} />
      <Route exact={true} path="/landingpage" component={LandingPage} />
      <Route exact={true} path="/privacypolicy" component={Privacy} />
      <Route exact={true} path="/contact" component={Contact} />
      <Route exact={true} path="/dentist" component={Dentist} />
      <Route
        exact={true}
        path="/dentist/:id/:doctorname"
        component={OneDoctor}
      />
      <Route exact={true} path="/ziadentalcare/admin" component={AdminLogin} />
      <Route
        exact={true}
        path="/ziadentalcare/dashboard"
        component={Dashboard}
      />
      <Route exact={true} path="/appointment" component={Appointment} />
      <Route exact={true} path="/services" component={Services} />
      <Route
        exact={true}
        path="/dental-emergency"
        component={DentalEmergency}
      />
    </Router>
  );
};

export default Approuter;
