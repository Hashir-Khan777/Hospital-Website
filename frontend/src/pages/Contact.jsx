import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../css/contact.css";
import Top from "../components/Top";

const Contact = () => {
  return (
    <div className="contact_form">
      <Header />
      <div className="contact_form_content">
        <form action="" method="POST">
          <fieldset>
            <legend>
              <h1>
                Don’t Wait Any Longer. Start Forgoing Your Own Path Today!
              </h1>
            </legend>
            <table>
              <tr>
                <td colSpan="2">
                  <input type="email" placeholder="Email Address" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Full Name" />
                </td>
                <td>
                  <input type="number" placeholder="Phone Number" />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <textarea placeholder="Message"></textarea>
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
      </div>
      <Footer />
      <Top />
    </div>
  );
};

export default Contact;
