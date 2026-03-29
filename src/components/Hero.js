import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">

      {/* Overlay */}
      <div className="hero-overlay">

        <h1 className="hero-title">Sree Coir Industry</h1>

        <p className="hero-subtitle">
          Leading Manufacturer of Premium Coir Products
        </p>

        <button className="hero-btn">Explore Products</button>

      </div>

    </div>
  );
}

export default Hero;