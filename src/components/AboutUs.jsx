import React from "react";
import "./AboutUs.css";
import teamImg from "../assets/ (1).png"; // replace with actual image path
import growImg from "../assets/ (2).png"; // replace with actual image path

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-intro">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            The Bibaswan Educational Foundation stands as a beacon of success,
            year after year. With unwavering dedication, it paves the path for
            countless aspirants to reach their dreams. Through its holistic
            approach to education, the institute molds minds, nurtures talents
            and guides individuals towards their destinations. Bibaswan's legacy
            of achievement continues to shine brightly, illuminating the futures
            of those who dare to dream.
          </p>
        </div>
        <img src={teamImg} alt="Team" className="about-img" />
      </div>

      <div className="about-mission">
        <img src={growImg} alt="Grow Better" className="mission-img" />
        <div className="mission-text">
          <h3>Moto Of Our Institute:</h3>
          <p>
            We believe that success is not just a destination but a journey, and
            we equip our students with the skills and mindset needed to navigate
            that journey with confidence. By fostering a growth
            mindset,resilience and ethical values, we empower our students to
            overcome challenges and sieze opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
