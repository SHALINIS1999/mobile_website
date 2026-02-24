import React from "react";
import "./contact.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
    <NavBar/>
    <div className="contact">
      <h2>Contact Us</h2>

      <div className="contact-box">
        <p><strong>Email:</strong> support@sampleworld.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Chennai, India</p>
      </div>

      <div className="contact-box">
        <h3>Enter Your Details</h3>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default Contact;