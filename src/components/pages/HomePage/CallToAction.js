import React from "react";
import "./Home.css";

function CallToAction() {
  return (
    <div className="hero__home-section">
      <div className="container">
        <div className="row home__hero-row">
          <div className="col">
            <div className="home__hero-text-wrapper">
              <div className="top-line">DATA ANALYTICS</div>
              <h1 className="heading">
                Every transaction is stored on our secure cloud database
              </h1>
              <p className="home__hero-subtitle">
                Never ever have to worry again about saved reciepts. We store
                your data, so you can access it anytime
              </p>
              <button className="homebtn">Sign Up Now</button>
            </div>
          </div>
          <div className="col">
            <div className="home__hero-img-wrapper">
              <img
                src="images/svg-8.svg"
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

export default CallToAction;
