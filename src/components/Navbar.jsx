import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../assets/logoimage.png";

const sections = ["home", "about", "popular-courses", "contact-us"];

const Navbar = ({ onOpenPopup }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? "active" : ""}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/courses" className="nav-link">
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

export default Navbar;
