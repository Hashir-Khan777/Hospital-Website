import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";

const Approuter = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
};

export default Approuter;
