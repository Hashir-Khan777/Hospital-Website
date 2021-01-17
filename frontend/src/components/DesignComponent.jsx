import React from "react";
import "../css/designcomponent.css";
import { Link } from "react-router-dom";

const DesignComponent = () => {
  return (
    <div className="design_component">
      <div className="skew_box skew_one">
        <div className="image_content">
          <div className="design_image">
            <figure>
              <img src="/images/tree.png" alt="" />
            </figure>
          </div>

          <div className="design_details">
            <h3>DEPARTMENTS</h3>
            <p>The Backbone of our Clinic</p>
          </div>
        </div>

        <Link className="more">MORE</Link>
      </div>

      <div className="skew_box skew_two">
        <div className="image_content">
          <div className="design_image">
            <figure>
              <img src="/images/medbook.png" alt="" />
            </figure>
          </div>

          <div className="design_details">
            <h3>MEDICAL SERVICES</h3>
            <p>A list of all available</p>
          </div>
        </div>

        <Link className="more">MORE</Link>
      </div>

      <div className="skew_box skew_three">
        <div className="image_content">
          <div className="design_image">
            <figure>
              <img src="/images/doctor.png" alt="" />
            </figure>
          </div>

          <div className="design_details">
            <h3>FIND A DOCTOR</h3>
            <p>All our staff by department</p>
          </div>
        </div>

        <Link className="more">MORE</Link>
      </div>

      <div className="skew_box skew_four">
        <div className="image_content">
          <div className="design_image">
            <figure>
              <img src="/images/helpdesk.png" alt="" />
            </figure>
          </div>

          <div className="design_details">
            <h3>MEDICAL SERVICES</h3>
            <p>Call us or fill in a form</p>
          </div>
        </div>

        <Link className="more">MORE</Link>
      </div>
    </div>
  );
};

export default DesignComponent;
