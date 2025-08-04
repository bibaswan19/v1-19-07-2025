import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import PopularCourses from "./components/CourseCarousel";
import NavBar from "./components/Navbar";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import TestimonialCarousel from "./components/Testimonial";
import Courses from "./Courses";
import LetsTalkPopup from "./components/LetsTalkPopup";
import Chatbot from "./components/Chatbot";
import BlogSection from "./components/BlogSection";
import NoticeSection from "./components/NoticeSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NotificationPage from "./NotificationPage";
import AdminPage from "./AdminPage";
import WhatsAppButton from "./components/WhatsAppButton";
import LoginPage from "./LoginPage"; // 🔑 New import
import "./App.css";

const Home = ({ onOpenPopup }) => (
  <>
    <NavBar onOpenPopup={onOpenPopup} />
    <NoticeSection />
    <HeroSection />
    <AboutUs />
    <PopularCourses onOpenPopup={onOpenPopup} />
    <div className="gallery-header" id="testimonials">
      <h2>Testimonial.</h2>
    </div>
    <TestimonialCarousel />
    <div className="gallery-header" id="blogs">
      <h2>Blogs & Videos.</h2>
    </div>
    <BlogSection />
    <WhatsAppButton />
    <Chatbot />
    <Contact />
    <Footer />
  </>
);

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // 🔐 Login state

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home onOpenPopup={openPopup} />} />
        <Route path="/courses" element={<Courses onOpenPopup={openPopup} />} />
        <Route path="/gallery" element={<Gallery onOpenPopup={openPopup} />} />
        <Route path="/notification" element={<NotificationPage />} />

        {/* 🔐 Simple login protection */}
        <Route
          path="/admin"
          element={
            loggedIn ? (
              <AdminPage />
            ) : (
              <LoginPage onLogin={() => setLoggedIn(true)} />
            )
          }
        />
      </Routes>

      {showPopup && <LetsTalkPopup onClose={closePopup} />}
    </>
  );
}

export default App;
