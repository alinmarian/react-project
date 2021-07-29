import React from "react";
import "./Home.css";

function Features() {
  return (
    <div className="hero__home-section">
      <div className="container">
        <div className="row home__hero-row">
          <div className="col">
            <div className="home__hero-text-wrapper">
              <div className="top-line">EASY SETUP</div>
              <h1 className="heading">
                Super fast and simple onboarding process
              </h1>
              <p className="home__hero-subtitle">
                Get everything set up and ready in under 10 minutes. All you
                need to do is add your information and you're ready to go
              </p>
              <button className="homebtn">Start Now</button>
            </div>
          </div>
          <div className="col">
            <div className="home__hero-img-wrapper">
              <img
                src="images/svg-7.svg"
                alt="Credit Card"
                className="home__hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
