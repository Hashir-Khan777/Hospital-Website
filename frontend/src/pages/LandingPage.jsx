import React, { useState } from "react";
import "../css/landingpage.css";
import Top from "../components/Top";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Messages } from "../store/action/GetDoctors";

const LandingPage = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [feedback, setFeedback] = useState();

  const dispatch = useDispatch();

  const landingMessage = (e) => {
    e.preventDefault();
    dispatch(Messages(name, email, feedback));
    props.history.push("/");
  };

  return (
    <div className="landing_page">
      <div className="page_landing">
        <header>
          <div className="logo_nav_section">
            <div className="logo">
              <Link className="header_logo_landing_page" to="/">
                <figure>
                  <img src="/favicon.ico" alt="" />
                </figure>
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
                  <Link to="/services" className="nav_links">
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
        </header>
        <div className="page_for_form">
          <form method="POST" onSubmit={landingMessage}>
            <fieldset>
              <legend>
                <h1>LANDING PAGE FORM</h1>
              </legend>
              <table>
                <tr>
                  <td>
                    <label className="landing_lablels" htmlFor="name">
                      <h3> Name: </h3>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      required
                      className="landing_input"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="landing_lablels" htmlFor="mail">
                      <h3> Email Address: </h3>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      required
                      className="landing_input"
                      type="email"
                      name="email"
                      id="mail"
                      placeholder="Eter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="landing_lablels" htmlFor="feedback">
                      <h3> Feedback: </h3>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea
                      required
                      name="feedback"
                      id="feedback"
                      placeholder="Your feedback..."
                      onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="landing_submit" type="submit">
                      Submit
                    </button>
                  </td>
                </tr>
              </table>
            </fieldset>
          </form>
        </div>

        <div className="landing_page_copyright">
          <div className="landing_copy_right">
            <i className="fas fa-copyright"></i>
            Copyright {new Date().getFullYear()} all rights reserved
          </div>
          <div className="landing_designed_by">
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
      <Top />
    </div>
  );
};

export default LandingPage;
