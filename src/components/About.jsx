import React from "react";
import "./about.css"
import Footer from "./Footer";
import NavBar from "./NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          We are committed to delivering the best quality products and services
          to our customers. Our goal is to make your experience simple, fast,
          and enjoyable.
        </p>
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To provide reliable, affordable, and high-quality solutions that
            meet customer needs.
          </p>
        </div>

        <div className="about-card">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✔ Trusted service</li>
            <li>✔ Quality products</li>
            <li>✔ 24/7 Support</li>
          </ul>
        </div>

      </div>
      <Footer />
    </div>
  );
};
export default About;
