import React from "react";
import { Link } from "react-router-dom";
import "../css/medicaldepartment.css";

const MedicalDepartments = () => {
  return (
    <div className="medical_departments">
      <div className="meical_heading_tagline">
        <h1>MEDICAL DEPARTMENTS</h1>
        <p>The Backbone of our Clinic</p>
      </div>

      <div className="medical_card_content">
        <div className="medical_department_cards">
          <div className="medical_card">
            <div className="medical_card_image">
              <Link to="/">
                <figure>
                  <img src="/images/nurse.jpg" alt="" />
                </figure>
              </Link>
            </div>
            <div className="medical_image_content">
              <h3>SURGERY</h3>
              <p>Dr. Avis Stankovic</p>
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
                  <img src="/images/nurse.jpg" alt="" />
                </figure>
              </Link>
            </div>
            <div className="medical_image_content">
              <h3>MICROBIOLOGY</h3>
              <p>Dr. John Manios</p>
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
                  <img src="/images/nurse.jpg" alt="" />
                </figure>
              </Link>
            </div>
            <div className="medical_image_content">
              <h3>PATHOLOGY</h3>
              <p>Dr. Marie Curie</p>
            </div>
            <div className="more_about_departments">
              <Link className="see_more_link" to="/">
                MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="modern_equipments">
          <h1>MODERN EQUIPMENT</h1>
          <p>
            Personalized patient care is what sets Medicus Medical Center apart.
            When you visit one of our four San Francisco campus locations you
            can expect to receive world class care. Expert physician specialists
            and caring clinical staff provide you with an exceptional patient
            care is what sets Medicus Medical Center apart health care
            experience.
          </p>

          <button className="departments_button">
            <div className="department_icon">
              <i class="fas fa-download download_icon"></i>
            </div>
              CHECKOUT ALLDEPARTMENTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalDepartments;
