import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../css/contact.css";
import Top from "../components/Top";
import { useDispatch } from "react-redux";
import { Messages } from "../store/action/GetDoctors";
import { Link } from "react-router-dom";

const Contact = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [feedback, setFeedback] = useState();

  const dispatch = useDispatch();

  const contactMessage = (e) => {
    e.preventDefault();
    dispatch(Messages(name, email, feedback));
    props.history.push("/");
  };

  return (
    <div className="contact_form">
      <Header />
      <div className="iframe_map services_content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.6949523236067!2d67.03029051500246!3d24.84010358406353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dd977094077%3A0xf991a85dab6d0f0f!2sZia%20Dental%20Care%20(Best%20Female%20Dentist%20in%20Clifton%20Karachi)%20%2F%20(%20Best%20Dental%20Clinic%20in%20Karachi)%20%2F%20(Best%20Pediatric%20Dentist)!5e0!3m2!1sen!2s!4v1611395969629!5m2!1sen!2s"
          allowfullscreen="true"
          title="Zia Dental Care"
          aria-hidden="false"
        ></iframe>
        <div className="contact_us">
          <h1>Contact Us</h1>
          <p>Fill In the Form for information or a meeting!</p>
        </div>
      </div>
      <div className="contact_form_content">
        <div className="contact_info_form_details">
          <div className="contact_form_section">
            <form method="POST" onSubmit={contactMessage}>
              <table>
                <tr>
                  <td>
                    <label htmlFor="name">Your Name:</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      required
                      type="text"
                      id="name"
                      placeholder="Enter you name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="email">Your Email:</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      required
                      type="email"
                      id="email"
                      placeholder="Enter you email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="feedback">Your Feedback:</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea
                      id="feedback"
                      placeholder="Enter your feedback"
                      onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="submit">Send Feedback</button>
                  </td>
                </tr>
              </table>
            </form>
          </div>

          <div className="contact_details_section">
            <div className="contact_details">
              <h2>CONTACT INFO & DETAILS</h2>
              <p>
                We are proud to offer the best cutting edge dental services to
                all our patients. You are welcome for all our dental services
                from Implant, Braces, Aligners, Root Canal Treatments under
                Microscope, Smile MakeOver Veneers, Crowns & Cosmetic Dentistry.
              </p>
              <p className="working_hours">
                <span>Working hours:</span>
                10:00 am - 9:00 pm
              </p>
              <p>+923002278864</p>
              <p>hello@ziadentalcare.pk</p>
              <p>
                Service Road, Bath Island, G6, Mehran Excellency Apartment,
                Khayaban-e-Iqbal, Clifton, Karachi, 75600
              </p>
            </div>

            <div className="contact_appointment">
              <h2>APPOINTMENT REQUEST</h2>
              <p>
                If you wish to book an appointment with a doctor, it is best
                that you visit the
                <Link to="/appointment"> Appointment Booking Page </Link>
                directly.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <Top />
    </div>
  );
};

export default Contact;
