import React from "react";
import "./Home.css";

function HeroSection() {
  return (
    <div className="hero__home-section">
      <div className="container">
        <div className="row home__hero-row">
          <div className="col">
            <div className="home__hero-text-wrapper">
              <div className="top-line">Exclusive Access</div>
              <h1 className="heading">Unlimited Transactions with zero fees</h1>
              <p className="home__hero-subtitle">
                Get access to our exclusive diamond card that allows you to send
                unlimited transactions without getting charged any fees
              </p>
              <button className="homebtn">Get Started Now!</button>
            </div>
          </div>
          <div className="col">
            <div className="home__hero-img-wrapper">
              <img
                src="images/svg-1.svg"
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

export default HeroSection;
