import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
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
              <i class="fas fa-ambulance"></i>
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
                  <Link to="/" className="nav_links">
                    dentists
                  </Link>
                </li>
                <li className="nav_list_item">
                  <Link to="/" className="nav_links">
                    services
                  </Link>
                </li>
                <li className="nav_list_item">
                  <Link to="/" className="nav_links">
                    privacy policy
                  </Link>
                </li>
                <li className="nav_list_item">
                  <Link to="/" className="nav_links">
                    blog
                  </Link>
                </li>
                <li className="nav_list_item">
                  <Link to="/" className="nav_links">
                    contact
                  </Link>
                </li>
                <li className="nav_list_item">
                  <i class="fas fa-share-alt"></i>
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
