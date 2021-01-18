import React from "react";
import { Link } from "react-router-dom";
import "../css/AboutContent.css";

const AboutContent = () => {
  return (
    <div className="about_content">
      <div className="about_our_hospital">
        <div className="about_content_section">
          <div className="headiing_tag_line">
            <h1>WELCOME TO ZIA DENTAL CARE</h1>
            <p>We' ve built a long standing relationship based on trust</p>
          </div>
          <div className="about_our_hospital_section">
            <p>
              Zia Dental Care, also known as the best dental clinic in Karachi
              where team of dentists aids in providing oral health services in
              affordable prices, who specializes in dentistry, the analysis,
              prevention, handling of infection, diseases of the teeth, and
              diseases of the soft tissues of the mouth. Our dentists always
              concerned with the improvement of oral health services.
            </p>
          </div>

          <div className="facilities_content">
            <h1>MODERN MEDICAL FACILITIES</h1>
            <p>
              Personalized patient care is what sets Medicus Medical Center
              apart. When you visit one of our four San Francisco campus
              locations you can expect to receive world class care. Expert
              physician specialists and caring clinical staff provide you with
              an exceptional health care experience.
            </p>
          </div>
          <div className="checkout_button">
            <button className="check_services">
              <i class="far fa-newspaper newspaper_icon"></i>
              CHECKOUT OUR FACILITIES
            </button>
          </div>
        </div>

        <div className="about_image_section">
          <Link>
            <div className="image_content">
              <figure>
                <img src="/images/outside.jpg" alt="" />
              </figure>
              <div className="giude">
                <h3>PATIENT & VISITOR GUIDE</h3>
                <p>Plan your visit to our Clinic</p>
                <p className="more_guide">MORE</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
