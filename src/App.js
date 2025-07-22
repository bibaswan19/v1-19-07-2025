import React from 'react';
import HeroSection from './components/HeroSection';
import PopularCourses from './components/CourseCarousel';
import NavBar from './components/Navbar';
import Gallery from './components/Gallery';
import './App.css'; 

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <PopularCourses />
      <div className="gallery-header">
        <h2>Gallery</h2>
      </div>
      <Gallery />
    </div>

  );
}


export default App;
