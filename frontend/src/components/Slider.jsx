import React from "react";
import "../css/slider.css";

const Slider = () => {
  return (
    <div className="header_slider">
      <div className="slider">
        <div className="slides">
          <div className="slide_one slide">
            <figure>
              <img src="/images/slideOne.jpg" alt="" />
            </figure>
            <div className="slide_content slideOne_content">
              <p>Slide One</p>
            </div>
          </div>
          {/* <div className="slide_one slide">
            <figure>
              <img src="/images/slideTwo.jpg" alt="" />
            </figure>
            <div className="slide_content slideOne_content">
              <p>Slide Two</p>
            </div>
          </div>
          <div className="slide_one slide">
            <figure>
              <img src="/images/outside.jpg" alt="" />
            </figure>
            <div className="slide_content slideOne_content">
              <p>Slide Three</p>
            </div>
          </div> */}
        </div>

        <div className="slider_button">
          <i className="fas fa-chevron-left left_slide"></i>
          <i className="fas fa-chevron-right right_slide"></i>
        </div>
      </div>
    </div>
  );
};

export default Slider;
