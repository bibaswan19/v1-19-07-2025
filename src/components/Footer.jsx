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
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact-us">Contact us</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Other</h4>
          <ul>
            <li>
              <a href="/notification">Notifications</a>
            </li>
            <li>
              <a href="#popular-courses">Popular-Courses</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#blogs">Videos</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          ©2025. All Rights Reserved by{" "}
          <a
            href="https://siplhub.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sikharthy Infotech Pvt. Ltd.
          </a>
        </p>
        <div className="footer-policy">
          <a href="/Privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="/termsandcondition.html" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

