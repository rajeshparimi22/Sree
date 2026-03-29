import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">

      <h2>Contact Us</h2>

      <div className="contact-info">
        <p>📍 Andhra Pradesh, India</p>
        <p>📞 +91 7396110511</p>
        <p>📧 rajeshparimi5699@gmail.com</p>
      </div>

      {/* ✅ SINGLE WhatsApp Button */}
      <div className="whatsapp-container">
        <a
          href="https://wa.me/917396110511?text=Hello%20I%20am%20interested%20in%20your%20products"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <span className="icon">💬</span>
          Message us on WhatsApp
        </a>
      </div>

    </div>
  );
};

export default Contact;