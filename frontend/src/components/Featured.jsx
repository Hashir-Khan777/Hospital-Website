import React from "react";
import { Link } from "react-router-dom";
import "../css/featured.css";

const Featured = () => {
  return (
    <div className="featured_component">
      <div className="heading_tagline_featured">
        <h1>OUR SERVICES</h1>
        <p>We cover a big variety of medical services</p>
      </div>

      <div className="featured_contents">
        <div className="featured_first_section">
          <div className="featured_components">
            <div className="service_component">
              <div className="image_service">
                <Link to="/">
                  <figure>
                    <img src="/images/generalcheckups.png" alt="" />
                  </figure>
                </Link>
              </div>
              <div className="servise_content">
                <h3>GENERAL CHECKUPS</h3>
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
                    <img src="/images/dentalimplants.png" alt="" />
                  </figure>
                </Link>
              </div>
              <div className="servise_content">
                <h3>DENTAL IMPLANTS</h3>
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
                    <img src="/images/rootcanal.png" alt="" />
                  </figure>
                </Link>
              </div>
              <div className="servise_content">
                <h3>ROOT CANAL</h3>
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
              Our aim is to provide our patients with the best and advanced
              dental care by our team of dental professionals who are
              experienced and committed to providing our patients with quality
              treatment. Zia dental care believes to serve our patients with
              quick, and less painful dental procedures and intraoral healthcare
              for all dental problems to meet their expectations with a bright
              smile. Our female dentist, Dr. Aimen Zia is one of the best female
              dentists in Karachi, a dedicated professional with an experience
              of more than a decade, who serves to provide you with the best
              solutions and recommendations to all your dental problems.
            </p>

            <Link to='/servives'>
              <button className="check_services">
                <i className="fas fa-microscope newspaper_icon"></i>
                CHECKOUT ALL SERVICES
              </button>
            </Link>
          </div>
        </div>

        <div className="featured_second_section">
          <h2>WORKING HOURS</h2>

          <ul className="hours_list">
            <li className="hours_item">
              <div className="days">MONDAY</div>
              <div className="timing">10:00am – 9:00pm</div>
            </li>
            <li className="hours_item">
              <div className="days">TUESDAY</div>
              <div className="timing">10:00am – 9:00pm</div>
            </li>
            <li className="hours_item">
              <div className="days">WEDNESDAY</div>
              <div className="timing">10:00am – 9:00pm</div>
            </li>
            <li className="hours_item">
              <div className="days">THURSDAY</div>
              <div className="timing">10:00am – 9:00pm</div>
            </li>
            <li className="hours_item">
              <div className="days">FRIDAY</div>
              <div className="timing">10:00am – 9:00pm</div>
            </li>
            <li className="hours_item">
              <div className="days">SATURDAY</div>
              <div className="timing">10:00am – 9:00pm</div>
            </li>
            <li className="hours_item">
              <div className="days">SUNDAY</div>
              <div className="timing">By Appointment Only</div>
            </li>
          </ul>

          <div className="fees_insurance">
            <h3>CERTIFIED EXPERTS</h3>
            <p>
              As a team of Top Dentists in Karachi, we are experienced and
              committed to providing our patients with quality treatment. During
              the entire process, we make it most priority to have full
              transparency and open communication with our patients at all times
              to make sure they are aware of their treatment progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
