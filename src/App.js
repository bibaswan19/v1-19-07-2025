import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import PopularCourses from "./components/CourseCarousel";
import NavBar from "./components/Navbar";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import TestimonialCarousel from "./components/Testimonial";
import Courses from "./Courses"; // ✅ Import Courses page
import "./App.css";
import LetsChat from "./components/LetsChat";

const Home = () => (
  <>
    <NavBar />
    <HeroSection />
    <AboutUs />
    <PopularCourses />
    <div className="gallery-header">
      <h2>Testimonial.</h2>
    </div>
    <TestimonialCarousel />
    <div className="gallery-header">
      <h2>Gallery.</h2>
    </div>
    <Gallery />
    <LetsChat/>
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default App;
