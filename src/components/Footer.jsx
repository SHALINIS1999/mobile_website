import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h3>Smart World</h3>
          <p>Building modern web experiences.</p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@smartworld.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Smart World. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;