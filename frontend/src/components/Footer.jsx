import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_upper_section_background_image">
        <div className="footer_upper_section">
          <h1>NEED A PERSONAL HEALTH PLAN?</h1>
          <p>
            Call Now +923002278864 and receive Top Quality Healthcare for you
            and your Family
          </p>
        </div>
      </div>

      <div className="footer_lower_section">
        <div className="logo_content_section">
          <div className="footer_logo">
            <Link to="/">LOGO</Link>
          </div>
          <div className="footer_content">
            <p>
              Zia Dental Care, also known as the best dental clinic in Karachi
              where team of dentists aids in providing oral health services in
              affordable prices, who specializes in dentistry, the analysis,
              prevention, handling of infection, diseases of the teeth, and
              diseases of the soft tissues of the mouth. Our dentists always
              concerned with the improvement of oral health services.
            </p>
          </div>
          <div className="foter_contact">
            <ul className="contact_list">
              <li className="contact_item">
                <i className="fas fa-phone-alt icon"></i>
                +923002278864
              </li>
              <li className="contact_item">
                <i className="fas fa-envelope icon"></i>
                hello@ziadentalcare.pk
              </li>
              <li className="contact_item">
                <i className="fas fa-map-marker-alt icon"></i>
                <a
                  href="https://www.google.com/maps/place/Zia+Dental+Care+(Best+Female+Dentist+in+Clifton+Karachi)+%2F+(+Best+Dental+Clinic+in+Karachi)+%2F+(Best+Pediatric+Dentist)/@24.8401085,67.0302905,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33dd977094077:0xf991a85dab6d0f0f!8m2!3d24.8401036!4d67.0324792"
                  target="_maps"
                >
                  Service Road, Bath Island, G6, Mehran Excellency Apartment,
                  Khayaban-e-Iqbal, Clifton, Karachi, 75600
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="quick_link_section">
          <h2>QUICK LINKS</h2>
          <ul className="quick_links_list">
            <li className="quick_links_item">
              <Link to="/" className="quick_access_links">
                home
              </Link>
            </li>
            <li className="quick_links_item">
              <Link to="/" className="quick_access_links">
                dentists
              </Link>
            </li>
            <li className="quick_links_item">
              <Link to="/" className="quick_access_links">
                services
              </Link>
            </li>
            <li className="quick_links_item">
              <Link to="/privacypolicy" className="quick_access_links">
                privacy policy
              </Link>
            </li>
            <li className="quick_links_item">
              <Link to="/blog" className="quick_access_links">
                blog
              </Link>
            </li>
            <li className="quick_links_item">
              <Link to="/landingpage" className="quick_access_links">
                landing Page
              </Link>
            </li>
            <li className="quick_links_item">
              <Link to="/contact" className="quick_access_links">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <CopyRight />
    </div>
  );
};

export default Footer;
