// ThreeDGallery.jsx
import React, { useState, useRef, useCallback, useEffect } from "react";
import throttle from "lodash.throttle";
import "./Gallery.css";
import NavBar from "./CourseNav.jsx";
import G1 from "../assets/g1.jpg";
import G2 from "../assets/g2.jpg";
import G3 from "../assets/g3.jpg";
import G4 from "../assets/g4.jpg";
import G5 from "../assets/g5.jpg";
import G6 from "../assets/g6.jpg";
import G7 from "../assets/g7.jpg";
import Footer from "./Footer.jsx";

const panels = [G1, G2, G3, G4, G5, G6, G7];
const angle = 180 / (panels.length - 1);

export default function ThreeDGallery({ onOpenPopup }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // handlers
  const handleNext = () =>
    setCurrentIndex((i) => (i + 1) % panels.length);
  const handlePrev = () =>
    setCurrentIndex((i) => (i - 1 + panels.length) % panels.length);

  // swipe & drag logic
  const dragStartX = useRef(null);
  const touchStartX = useRef(null);

  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
  };
  const handleMouseMove = (e) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (diff > 50) {
      handlePrev();
      dragStartX.current = null;
    } else if (diff < -50) {
      handleNext();
      dragStartX.current = null;
    }
  };
  const handleMouseUp = () => {
    dragStartX.current = null;
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.touches[0].clientX - touchStartX.current;
    if (diff > 50) {
      handlePrev();
      touchStartX.current = null;
    } else if (diff < -50) {
      handleNext();
      touchStartX.current = null;
    }
  };
  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  // throttled for performance
  const onMouseMoveThrottled = useCallback(
    throttle(handleMouseMove, 50),
    []
  );
  const onTouchMoveThrottled = useCallback(
    throttle(handleTouchMove, 50),
    []
  );

  return (
    <>
      <NavBar onOpenPopup={onOpenPopup} />
      <div
        className="gallery-container"
        onMouseDown={handleMouseDown}
        onMouseMove={onMouseMoveThrottled}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={onTouchMoveThrottled}
        onTouchEnd={handleTouchEnd}
      >
        <button className="nav-button left" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="gallery">
          {panels.map((src, i) => {
            let offset = (i - currentIndex + panels.length) % panels.length;
            if (offset > panels.length / 2) offset -= panels.length;
            const focused = i === currentIndex;

            return (
              <div
                key={i}
                className={`panel ${focused ? "focused" : "blurred"}`}
                style={{
                  backgroundImage: `url(${src})`,
                  transform: `rotateY(${offset * angle}deg) ${getTranslateZ()} ${
                    !focused ? "scale(0.8)" : ""
                  }`,
                }}
              />
            );
          })}
        </div>
        <button className="nav-button right" onClick={handleNext}>
          &#10095;
        </button>
      </div>
      <Footer/>
    </>
  );
}

// helper for responsive depth
function getTranslateZ() {
  return window.innerWidth <= 600
    ? "translateZ(90vw)"
    : "translateZ(40vw)";
}
