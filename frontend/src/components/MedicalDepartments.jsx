import React from "react";
import { Link } from "react-router-dom";
import "../css/medicaldepartment.css";

const MedicalDepartments = () => {
  return (
    <div className="medical_departments">
      <div className="meical_heading_tagline">
        <h1>OUR DOCTORS</h1>
        <p>The Backbone of our Clinic</p>
      </div>

      <div className="medical_card_content">
        <div className="medical_department_cards">
          <div className="medical_card">
            <div className="medical_card_image">
              <Link to="/">
                <figure>
                  <img src="/images/aimenzia.jpg" alt="" />
                </figure>
              </Link>
            </div>
            <div className="medical_image_content">
              <h3>COSMETIC DENTIST</h3>
              <p>Dr. Aimen Zia</p>
            </div>
            <div className="more_about_departments">
              <Link className="see_more_link" to="/">
                MORE
              </Link>
            </div>
          </div>

          <div className="medical_card">
            <div className="medical_card_image">
              <Link to="/">
                <figure>
                  <img src="/images/zaid.jpg" alt="" />
                </figure>
              </Link>
            </div>
            <div className="medical_image_content">
              <h3>MAXILLOFACIAL SURGEON</h3>
              <p>Dr. Zaid Iqbal</p>
            </div>
            <div className="more_about_departments">
              <Link className="see_more_link" to="/">
                MORE
              </Link>
            </div>
          </div>

          <div className="medical_card">
            <div className="medical_card_image">
              <Link to="/">
                <figure>
                  <img src="/images/farhan.jpg" alt="" />
                </figure>
              </Link>
            </div>
            <div className="medical_image_content">
              <h3>ORTHODONTIST</h3>
              <p>Dr. Farhan Farooq</p>
            </div>
            <div className="more_about_departments">
              <Link className="see_more_link" to="/">
                MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="modern_equipments">
          <h1>ABOUT OUR DOCTORS</h1>
          <p>
            Dr. Aimen Zia and her team of Dental Professionals include all
            experienced and dedicated dentists that work together to serve our
            patients with a friendly and family-like atmosphere. We work and
            support each other to provide you Best Dental Treatment in Karachi
            with a soothing comfortable environment. Our clinic is situated in
            the vicinity of the Bath island near 3-Talwar Clifton, Karachi. Zia
            Dental Care believes to provide their patients with an affordable
            and promising treatment to satisfy them with their expectations.
            Your beautiful smile is our first priority. Every person has
            different expectations and our job is to meet their expectations.
          </p>

          <button className="departments_button">
            <div className="department_icon">
              <i className="fas fa-download download_icon"></i>
            </div>
            CHECKOUT ALL DOCTORS
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalDepartments;
