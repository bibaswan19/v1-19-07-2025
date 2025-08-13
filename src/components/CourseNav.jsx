import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../assets/logoimage.png";
import { Icon } from "@iconify/react";

const CourseNavbar = ({ onOpenPopup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false); // close menu in mobile
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-img" />
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <a
            href="/#about"
            className="nav-link"
            onClick={(e) => handleNavClick(e, "about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/#popular-courses"
            className="nav-link"
            onClick={(e) => handleNavClick(e, "popular-courses")}
          >
            Popular Courses
          </a>
        </li>
        <li>
          <a
            href="/#contact-us"
            className="nav-link"
            onClick={(e) => handleNavClick(e, "contact-us")}
          >
            Contact Us
          </a>
        </li>
        <li>
          <Link
            to="/gallery"
            className={`nav-link ${location.pathname === "/gallery" ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className={`nav-link ${location.pathname === "/courses" ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Courses
          </Link>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <button className="sign-in" onClick={onOpenPopup}>
          Let's Talk
        </button>
        <button className="sign-up" onClick={() => navigate("/study-materials")}>
          Study Materials
        </button>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <Icon icon="mdi:menu" width="28" />
      </div>
    </nav>
  );
};

export default CourseNavbar;
