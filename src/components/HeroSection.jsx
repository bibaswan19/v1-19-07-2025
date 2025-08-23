import React from 'react';
import './HeroSection.css';
import sampleImage from '../assets/heroimage.jpg'; // Use your image path

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-left">
{/*         <p className="hero-offer">✅ Get 30% off on first enroll</p> */}
        <h1>YOUR SUCCESS, OUR GOAL</h1>
        <p className="hero-subtext">
          There’s no shortcut to success, but there’s always the right guidance – find it at <span>Bibaswan</span>.
        </p>
        
        {/* <div className="search-bar">
          <input type="text" placeholder="search courses..." />
          <button>🔍</button>
        </div> */}
        <div className="hero-tags">
          <span>✔️ Expert Faculty Mentorship </span>
          <br/>
          <span>✔️ Friendly & Supportive Community</span>
          <br/>
          <span>✔️ Personal Performance Monitoring</span>
          <br/>
          <span>✔️ Daily MCQs + PYQs</span>
          <br/>
          <span>✔️ 1:1 Progress Guidance</span>
        </div>
      </div>

      <div className="hero-right">
        <img src={sampleImage} alt="Instructor" />
        <div className="badge-course">📘 25+ Available courses</div>
      </div>
    </div>
  );
};

export default HeroSection;


