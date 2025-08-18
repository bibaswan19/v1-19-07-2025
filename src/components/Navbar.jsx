import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../assets/logoimage.png";
import { Icon } from "@iconify/react";

const sections = ["home", "about", "popular-courses", "contact-us"];

const Navbar = ({ onOpenPopup }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0,                // trigger immediately
        rootMargin: "-50% 0px -50% 0px", // activates when section hits middle/top
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-img" />
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {sections.map((id) => (
          <li key={id} onClick={() => setMenuOpen(false)}>
            <a
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? "active" : ""}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <Link to="/gallery" className="nav-link" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/courses" className="nav-link" onClick={() => setMenuOpen(false)}>
            Courses
          </Link>
        </li>
      </ul>

      {/* Action Buttons */}
      <div className="auth-buttons">
        <button className="sign-in" onClick={onOpenPopup}>
          Let's Talk
        </button>
        <button className="sign-up" onClick={() => navigate("/study-materials")}>
          Study Materials
        </button>
      </div>

      {/* Hamburger (mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <Icon icon="mdi:menu" width="28" />
      </div>
    </nav>
  );
};

export default Navbar;
