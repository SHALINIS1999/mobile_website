import React from "react";
import "./services.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Services() {
  return (
    <>
    <NavBar/>
    <div className="services">
      <h2>Our Services</h2>

      <div className="service-box">
        <h3>✔ Fast Delivery</h3>
        <p>We deliver products quickly and safely to your doorstep.</p>
      </div>

      <div className="service-box">
        <h3>✔ Quality Products</h3>
        <p>We provide only high-quality and trusted products.</p>
      </div>

      <div className="service-box">
        <h3>✔ Secure Payments</h3>
        <p>Your payments are safe with our secure systems.</p>
      </div>

      <div className="service-box">
        <h3>✔ Customer Support</h3>
        <p>Our support team is available to help you anytime.</p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Services;