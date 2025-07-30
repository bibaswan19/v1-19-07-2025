import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../assets/logoimage.png";

const CourseNavbar = ({ onOpenPopup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/#about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/#popular-courses" className="nav-link">
            Popular-courses
          </Link>
        </li>
        <li>
          <Link to="/#contact-us" className="nav-link">
            Contact-us
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className={`nav-link ${
              location.pathname === "/gallery" ? "active" : ""
            }`}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className={`nav-link ${
              location.pathname === "/courses" ? "active" : ""
            }`}
          >
            Courses
          </Link>
        </li>
      </ul>

      <div className="auth-buttons">
        <button className="sign-in" onClick={onOpenPopup}>
          Let's Talk
        </button>
        <button className="sign-up">Study Materials</button>
      </div>
    </nav>
  );
};

export default CourseNavbar;
