import React from "react";
import "../css/landingpage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="landing_page">
      <div className="page_landing">
        <Header />
        <h1>Landing Page</h1>
        <div className="copy_right">
          <div className="all_rights_reserved">
            <p>
              Copyright <i className="fas fa-copyright"></i>{" "}
              {new Date().getFullYear()} all rights reserved
            </p>
          </div>
          <div className="designed by">
            <p>
              Designed By:
              <a
                className="fiverr_link"
                href="https://www.fiverr.com/hashirkhan33?up_rollout=true"
                target="_fiverr"
              >
                Muhammad Hashir Khan
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
