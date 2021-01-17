import React from "react";
import AboutContent from "../components/AboutContent";
import DesignComponent from "../components/DesignComponent";
import Header from "../components/Header";
import MedicalDepartments from "../components/MedicalDepartments";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="hospital_appointment">
      <Header />
      <Slider />
      <DesignComponent />
      <AboutContent />
      <MedicalDepartments />
    </div>
  );
};

export default Home;
