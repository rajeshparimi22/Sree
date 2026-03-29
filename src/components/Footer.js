import React from "react";
import "./Footer.css";

const Footer = () => {

  // Get today's day (0 = Sun, 1 = Mon, ...)
  const today = new Date().getDay();

  const hours = [
    { day: "Sun", time: "Closed" },
    { day: "Mon", time: "09:00 am – 06:00 pm" },
    { day: "Tue", time: "09:00 am – 06:00 pm" },
    { day: "Wed", time: "09:00 am – 06:00 pm" },
    { day: "Thu", time: "09:00 am – 06:00 pm" },
    { day: "Fri", time: "09:00 am – 06:00 pm" },
    { day: "Sat", time: "09:00 am – 06:00 pm" },
  ];

  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-container">

          {/* Left Section */}
          <div className="footer-section">
            <h2>Sree Coir Industry</h2>
            <p>
              Eco-friendly coir solutions for agriculture & industry 🌱
            </p>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>📍 Andhra Pradesh, India</p>
            <p>📞 +91 7396110511</p>
            <p>📧 info@sreecoir.com</p>
          </div>

          

          {/* Hours Section (NEW 🔥) */}
          <div className="footer-section">
            <h3>Hours</h3>

            {hours.map((item, index) => (
              <p
                key={index}
                className={today === index ? "active-day" : ""}
              >
                <strong>{item.day}</strong> {item.time}
              </p>
            ))}
          </div>

          <div className="footer-section map-section">
  <h3>Our Location</h3>

  <iframe
    title="location"
    src="https://www.google.com/maps?q=16.851068870028374,81.51053316633342&z=15&output=embed"
    width="100%"
    height="200"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>

  <a
    href="https://www.google.com/maps/dir/?api=1&destination=16.851828841995605,81.51079049205534"
    target="_blank"
    rel="noopener noreferrer"
    className="map-btn"
  >
    📍 Get Directions
  </a>
</div>

          

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © 2026 Sree Coir Industry | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;