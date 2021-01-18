import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/dentist.css";
import { Link } from "react-router-dom";

const Dentist = () => {
  return (
    <div className="dentist">
      <Header />
      <div className="dentists_content">
        <h1>OUR EXPERT DENTISTS</h1>
        <ul className="dentists_list">
          <li className="dentist_item">
            <div className="dentist_image">
              <figure>
                <img src="/images/aimenzia.jpg" alt="" />
              </figure>
            </div>
            <div className="doctor_details">
              <h1 className="doctor_name">Dr. Aimen Zia</h1>
              <p>Dentist, Cosmetic Dentist B.D.S(K.M.D.C), C-Ortho, C-Endo</p>
              <Link to="/" className="dental_links">
                View Profile
              </Link>
            </div>
          </li>

          <li className="dentist_item">
            <div className="dentist_image">
              <figure>
                <img src="/images/aimenzia.jpg" alt="" />
              </figure>
            </div>
            <div className="doctor_details">
              <h1 className="doctor_name">Dr. Aimen Zia</h1>
              <p>Dentist, Cosmetic Dentist B.D.S(K.M.D.C), C-Ortho, C-Endo</p>
              <Link to="/">View Profile</Link>
            </div>
          </li>

          <li className="dentist_item">
            <div className="dentist_image">
              <figure>
                <img src="/images/aimenzia.jpg" alt="" />
              </figure>
            </div>
            <div className="doctor_details">
              <h1 className="doctor_name">Dr. Aimen Zia</h1>
              <p>Dentist, Cosmetic Dentist B.D.S(K.M.D.C), C-Ortho, C-Endo</p>
              <Link to="/">View Profile</Link>
            </div>
          </li>

          <li className="dentist_item">
            <div className="dentist_image">
              <figure>
                <img src="/images/aimenzia.jpg" alt="" />
              </figure>
            </div>
            <div className="doctor_details">
              <h1 className="doctor_name">Dr. Aimen Zia</h1>
              <p>Dentist, Cosmetic Dentist B.D.S(K.M.D.C), C-Ortho, C-Endo</p>
              <Link to="/">View Profile</Link>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Dentist;
