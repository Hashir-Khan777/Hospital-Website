import React from "react";
import AboutContent from "../components/AboutContent";
import DesignComponent from "../components/DesignComponent";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MedicalDepartments from "../components/MedicalDepartments";
import Slider from "../components/Slider";
import Top from "../components/Top";

const Home = () => {
  return (
    <div className="hospital_appointment">
      <Header />
      <Slider />
      <DesignComponent />
      <AboutContent />
      <MedicalDepartments />
      <Featured />
      <Footer />
      <Top />
    </div>
  );
};

export default Home;
