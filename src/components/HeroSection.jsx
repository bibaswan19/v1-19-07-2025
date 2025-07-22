import React from 'react';
import './HeroSection.css';
import sampleImage from '../assets/heroimage.jpg'; // Use your image path

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-left">
        <p className="hero-offer">✅ Get 30% off on first enroll</p>
        <h1>JOIN US FOR SHAPING
            YOUR BRIGHT FUTURE</h1>
        <p className="hero-subtext">
          Build skills with our courses and mentor from world-class companies.
        </p>
        
        {/* <div className="search-bar">
          <input type="text" placeholder="search courses..." />
          <button>🔍</button>
        </div> */}
        <div className="hero-tags">
          <span>✔️ Flexible</span>
          <span>✔️ Learning path</span>
          <span>✔️ Community</span>
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
