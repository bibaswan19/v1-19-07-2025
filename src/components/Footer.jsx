import React from "react";
import "./Footer.css";
import Logo from "../assets/logoimage.png"; // Update path if different

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={Logo} alt="Bibaswan Logo" />
        </div>

        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact-us">Contact us</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/courses">Courses</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Other</h4>
          <ul>
            <li>Notifications</li>
            <li><a href="#popular-courses">Popular-Courses</a></li>    
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#blogs">Videos</a></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>@2025 Agency. All Rights Reserved by Sikharthy Infotech Pvt. Ltd.</p>
        <div className="footer-policy">
          <a href="/Privacy policy">Privacy policy</a>
          <a href="/terms">Terms & conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
