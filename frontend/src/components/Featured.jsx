import React from "react";
import { Link } from "react-router-dom";
import "../css/featured.css";

const Featured = () => {
  return (
    <div className="featured_component">
      <div className="heading_tagline_featured">
        <h1>FEATURED SERVICES</h1>
        <p>We cover a big variety of medical services</p>
      </div>

      <div className="featured_contents">
        <div className="featured_first_section">
          <div className="featured_components">
            <div className="service_component">
              <div className="image_service">
                <Link to="/">
                  <figure>
                    <img src="/images/checkup.png" alt="" />
                  </figure>
                </Link>
              </div>
              <div className="servise_content">
                <h3>FREE CHECKUP</h3>
                <p>The basis of Wellness</p>
              </div>
              <div className="more_services">
                <Link className="more_services_link" to="/">
                  MORE
                </Link>
              </div>
            </div>

            <div className="service_component">
              <div className="image_service">
                <Link to="/">
                  <figure>
                    <img src="/images/checkup.png" alt="" />
                  </figure>
                </Link>
              </div>
              <div className="servise_content">
                <h3>FREE CHECKUP</h3>
                <p>The basis of Wellness</p>
              </div>
              <div className="more_services">
                <Link className="more_services_link" to="/">
                  MORE
                </Link>
              </div>
            </div>

            <div className="service_component">
              <div className="image_service">
                <Link to="/">
                  <figure>
                    <img src="/images/checkup.png" alt="" />
                  </figure>
                </Link>
              </div>
              <div className="servise_content">
                <h3>FREE CHECKUP</h3>
                <p>The basis of Wellness</p>
              </div>
              <div className="more_services">
                <Link className="more_services_link" to="/">
                  MORE
                </Link>
              </div>
            </div>
          </div>
          <div className="featured_content_paragraph">
            <p>
              Personalized patient care is what sets Medicus Medical Center
              apart. When you visit one of our four San Francisco campus
              locations you can expect to receive world class care. Expert
              physician specialists and caring clinical staff provide you with
              an exceptional health care experience.
            </p>

            <button className="check_services">
              <i class="fas fa-microscope newspaper_icon"></i>
              CHECKOUT ALL DEPARTMENTS
            </button>
          </div>
        </div>

        <div className="featured_second_section">
          <h2>WORKING HOURS</h2>

          <ul className="hours_list">
            <li className="hours_item">
              <div className="days">MONDAY</div>
              <div className="timing">09:00-20:00</div>
            </li>
            <li className="hours_item">
              <div className="days">TUESDAY</div>
              <div className="timing">09:00-20:00</div>
            </li>
            <li className="hours_item">
              <div className="days">WEDNESDAY</div>
              <div className="timing">09:00-20:00</div>
            </li>
            <li className="hours_item">
              <div className="days">THURSDAY</div>
              <div className="timing">09:00-20:00</div>
            </li>
            <li className="hours_item">
              <div className="days">FRIDAY</div>
              <div className="timing">09:00-20:00</div>
            </li>
            <li className="hours_item">
              <div className="days">SATURDAY</div>
              <div className="timing">09:00-20:00</div>
            </li>
            <li className="hours_item">
              <div className="days">SUNDAY</div>
              <div className="timing">09:00-20:00</div>
            </li>
          </ul>

          <div className="fees_insurance">
            <h3>FEES & INSURANCE</h3>
            <p>
              For the convenience of our clients the Medicus Health Center and
              Hospital provides direct insurance billing with all the major
              international insurance providers and assistance companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
