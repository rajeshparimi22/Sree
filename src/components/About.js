import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about">
      <h2 data-aos="fade-up">Why Choose Sree Coir?</h2>

      <div className="about-container">
        <div className="about-card" data-aos="zoom-in">
          <h3>🌱 Eco Friendly</h3>
          <p>100% natural and biodegradable coir products</p>
        </div>

        <div className="about-card" data-aos="zoom-in">
          <h3>🏭 Industry Experience</h3>
          <p>Years of expertise in coir manufacturing</p>
        </div>

        <div className="about-card" data-aos="zoom-in">
          <h3>🌍 Global Supply</h3>
          <p>Exporting high-quality products worldwide</p>
        </div>

        <div className="about-card" data-aos="zoom-in">
          <h3>💰 Affordable Pricing</h3>
          <p>Best quality at competitive prices</p>
        </div>
      </div>
    </div>
  );
}

export default About;