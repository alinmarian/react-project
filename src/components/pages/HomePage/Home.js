import React from "react";
import HeroSection from "./HeroSection";
import Benefits from "./Benefits";
import Pricing from "./Pricing";
import Features from "./Features";
import CallToAction from "./CallToAction";

function Home() {
  return (
    <div>
      <HeroSection />
      <Benefits />
      <Features />
      <Pricing />
      <CallToAction />
    </div>
  );
}

export default Home;
