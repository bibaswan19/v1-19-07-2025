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
import Chatbot from "./components/Chatbot";
import BlogSection from "./components/BlogSection";
import NoticeSection from "./components/NoticeSection";

const Home = () => (
  <>
    <NavBar />
    <NoticeSection/>
    <HeroSection />
    <AboutUs />
    <PopularCourses />
    <div className="gallery-header">
      <h2>Testimonial.</h2>
    </div>
    <TestimonialCarousel />
        <div className="gallery-header">
      <h2>Blogs & Videos.</h2>
    </div>
    <BlogSection/>
    {/* <Gallery /> */}
    <Chatbot/>
    <LetsChat/>
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
