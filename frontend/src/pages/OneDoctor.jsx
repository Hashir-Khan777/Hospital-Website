import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Top from "../components/Top";
import "../css/onedoctor.css";
import { useDispatch, useSelector } from "react-redux";
import { Doctor_Details } from "../store/action/GetDoctors";
import Loadingbox from "../components/Loadingbox";
import Messagebox from "../components/Messagebox";

const OneDoctor = (props) => {
  const dispatch = useDispatch();
  const doctortId = props.match.params.id;
  const doctorDetails = useSelector((state) => state.doctorDetails);
  const { loading, error, doctor } = doctorDetails;

  useEffect(() => {
    dispatch(Doctor_Details(doctortId));
  }, [dispatch, doctortId]);

  console.log(doctor);

  return (
    <div className="one_dentist">
      <div className="one_dentist_content">
        <Header />
        {loading ? (
          <Loadingbox />
        ) : error ? (
          <Messagebox>{error}</Messagebox>
        ) : (
          <div>
            <div className="doctor_profile">
              <div className="doctor_content">
                <div className="doctor_image_and_content">
                  <div className="doctor_image">
                    <figure>
                      <img src="/images/aimenzia.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="doctor_name">
                    <h1>Dr. Aimen Zia</h1>
                    <p>10 years expierience</p>
                  </div>
                </div>

                <div className="doctor_services">
                  <h2>Services</h2>
                  <ul className="serivice_list">
                    <li className="service_item">Cosmetic Dentistry</li>
                    <li className="service_item">
                      Aesthetic Crown And Bridges
                    </li>
                    <li className="service_item">Dental Hygiene</li>
                  </ul>
                </div>

                <div className="conditions">
                  <h2>Condition Treated</h2>
                  <ul className="condition_list">
                    <li className="condition_item">Cavities</li>
                    <li className="condition_item">Dental Caries</li>
                    <li className="condition_item">Gingivitis</li>
                  </ul>
                </div>

                <div className="doctor_education">
                  <h2>Education</h2>
                  <ul className="education_list">
                    <li className="education_item">B.D.S, 2012</li>
                    <li className="education_item">C-Ortho</li>
                    <li className="education_item">C-Endo</li>
                  </ul>
                </div>

                <div className="about_doctor">
                  <h2>About</h2>
                  <p>
                    Dr. Aiman Zia is a general and cosmetic dentist. Dr. Aiman
                    Zia is among the best dentists in Karachi. She has a B.D.S,
                    C-Ortho, and C-Endo degree along with an experience of more
                    than 10 years.
                  </p>
                </div>
              </div>

              <div className="side_bar_content">
                <div className="waiting_time">
                  <p className="time_for_waiting">Under 15 min wait time</p>
                </div>

                <div className="working_hours">
                  <ul className="worlking_hours_list">
                    <li className="working_hours_item">
                      <p>Monday - Saturday</p>
                      <p>10:00 AM – 11:00 PM</p>
                    </li>
                    <li className="working_hours_item">
                      <p>Sunday</p>
                      <p>01:00 PM – 07:00 PM</p>
                    </li>
                  </ul>
                </div>

                <div className="fees">
                  <h2>fees:</h2>
                  <p>Rs. 1000</p>
                </div>
              </div>
            </div>
            <div className="write_review">
              <textarea
                className="write_review_input"
                cols="30"
                rows="10"
                placeholder="write a review..."
              ></textarea>
              <button className="submit_review">Submit</button>
            </div>
          </div>
        )}
        <Footer />
      </div>
      <Top />
    </div>
  );
};

export default OneDoctor;
