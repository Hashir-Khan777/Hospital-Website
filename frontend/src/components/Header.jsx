import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      document.querySelector(".upper_section").style.display = "none";
    } else {
      document.querySelector(".upper_section").style.display = "flex";
    }
  });

  return (
    <div className="header">
      <header>
        <div className="header_content">
          <div className="upper_section">
            <div className="appointment">
              <ul className="appointment_list">
                <li className="appointment_items">
                  <Link to="/" className="appointment_links">
                    faq
                  </Link>
                </li>
                <li className="appointment_items">
                  <Link to="/" className="appointment_links">
                    request an appointment
                  </Link>
                </li>
              </ul>
            </div>

            <div className="emmergency_number">
              <i className="fas fa-ambulance"></i>
              <p className="emmergecncy_call">Emergency Line: +923002278864</p>
            </div>
          </div>

          <div className="logo_nav_section">
            <div className="logo">
              <Link className="header_logo" to="/">
                logo
              </Link>
            </div>

            <div className="nav_list_section">
              <ul className="nav_list">
                <li className="nav_list_item">
                  <Link to="/" className="nav_links active">
                    home
                  </Link>
                </li>
                <li className="nav_list_item">
                  <Link to="/dentist" className="nav_links">
                    dentists
                  </Link>
                </li>
                <li className="nav_list_item">
                  <Link to="/" className="nav_links">
                    services
                  </Link>
                </li>
                <li className="nav_list_item">
                  <Link to="/contact" className="nav_links">
                    contact
                  </Link>
                </li>
                <li className="nav_list_item">
                  <i className="fas fa-share-alt"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
