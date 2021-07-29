import React from "react";
import "./Home.css";

function Benefits() {
  return (
    <div className="hero__home-section custombg">
      <div className="container">
        <div className="row home__hero-row">
          <div className="col">
            <div className="home__hero-img-wrapper">
              <img
                src="images/svg-5.svg"
                alt="Credit Card"
                className="home__hero-img"
              />
            </div>
          </div>
          <div className="col">
            <div className="home__hero-text-wrapper">
              <div className="top-line">100% SECURE</div>
              <h1 className="heading">Stay protected 24/7 anywhere anytime</h1>
              <p className="home__hero-subtitle">
                We have you covered no matter where you are located. Over 140
                locations worldwide to ensure you have access anytime
              </p>
              <button className="homebtn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
