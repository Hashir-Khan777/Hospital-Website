import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../css/contact.css";
import Top from "../components/Top";
import { useDispatch } from "react-redux";
import { Messages } from "../store/action/GetDoctors";

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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.6949523236067!2d67.03029051500246!3d24.84010358406353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dd977094077%3A0xf991a85dab6d0f0f!2sZia%20Dental%20Care%20(Best%20Female%20Dentist%20in%20Clifton%20Karachi)%20%2F%20(%20Best%20Dental%20Clinic%20in%20Karachi)%20%2F%20(Best%20Pediatric%20Dentist)!5e0!3m2!1sen!2s!4v1611220273986!5m2!1sen!2s"
        width="100%"
        height="450"
        allowfullscreen="true"
        aria-hidden="false"
      ></iframe>
      <div className="contact_form_content">
        <form onSubmit={contactMessage} method="POST">
          <fieldset>
            <legend>
              <h1>
                Don’t Wait Any Longer. Start Forgoing Your Own Path Today!
              </h1>
            </legend>
            <table>
              <tr>
                <td colSpan="2">
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    required
                    maxLength="11"
                    type="number"
                    placeholder="Phone Number"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <textarea
                    required
                    placeholder="Message"
                    onChange={(e) => setFeedback(e.target.value)}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button className="send_message" type="submit">
                    Send message
                  </button>
                </td>
              </tr>
            </table>
          </fieldset>
        </form>
        <p>--OR--</p>
        <div className="whatsapp_mesanger">
          <a
            href="https://web.whatsapp.com/send?phone=923002278864"
            target="_whatsapp"
          >
            <figure>
              <img src="/images/whatsapp.png" width="90px" alt="" />
            </figure>
          </a>
          <a href="https://m.me/ZiaDentalCare" target="_messenger">
            <figure>
              <img src="/images/messenger.png" width="80px" alt="" />
            </figure>
          </a>
        </div>
        <Footer />
      </div>
      <Top />
    </div>
  );
};

export default Contact;
