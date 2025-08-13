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

  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-img" />
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <button className="nav-link" onClick={() => handleSectionClick("about")}>About</button>
        </li>
        <li>
          <button className="nav-link" onClick={() => handleSectionClick("popular-courses")}>Popular Courses</button>
        </li>
        <li>
          <button className="nav-link" onClick={() => handleSectionClick("contact-us")}>Contact Us</button>
        </li>
        <li>
          <Link to="/gallery" className={`nav-link ${location.pathname === "/gallery" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Gallery</Link>
        </li>
        <li>
          <Link to="/courses" className={`nav-link ${location.pathname === "/courses" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Courses</Link>
        </li>
      </ul>

      <div className="auth-buttons">
        <button className="sign-in" onClick={onOpenPopup}>Let's Talk</button>
        <button className="sign-up" onClick={() => navigate("/study-materials")}>Study Materials</button>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <Icon icon="mdi:menu" width="28" />
      </div>
    </nav>
  );
};

export default CourseNavbar;
