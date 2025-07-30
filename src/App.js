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
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NotificationPage from "./NotificationPage";
import AdminPage from "./AdminPage";

const Home = () => (
  <>
    <NavBar />
    <NoticeSection />
    <HeroSection />
    <AboutUs />
    <PopularCourses />
    <div className="gallery-header" id="testimonials">
      <h2>Testimonial.</h2>
    </div>
    <TestimonialCarousel />
    <div className="gallery-header" id="blogs">
      <h2>Blogs & Videos.</h2>
    </div>
    <BlogSection />
    <Chatbot />
    {/* <LetsChat /> */}
    <Contact/>
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/notification" element={<NotificationPage/>} />
      <Route path="/admin" element={<AdminPage/>} />
    </Routes>
  );
}

export default App;
