import React, { useState, useRef } from "react";
import "./Gallery.css";

const ThreeDGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const panels = [
    "/image2.jpg",
    "/image2.jpg",
    "/image2.jpg",
    "/image2.jpg",
    "/image2.jpg",
    "/image2.jpg",
    "/image2.jpg",
    "/image2.jpg",
    "/image2.jpg",
    "/image2.jpg"
  ];

  const angle = 180 / (panels.length - 1); // Half-cylinder effect

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % panels.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + panels.length) % panels.length);
  };

  // Swipe support
  const dragStartX = useRef(null);
  const dragging = useRef(false);

  const handleMouseDown = (e) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const diff = e.clientX - dragStartX.current;
    if (diff > 50) {
      handlePrev();
      dragging.current = false;
    } else if (diff < -50) {
      handleNext();
      dragging.current = false;
    }
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchEndX.current - touchStartX.current;

    if (diff > 50) {
      handlePrev();
    } else if (diff < -50) {
      handleNext();
    }
  };

  const getTranslateZ = () => {
    if (window.innerWidth <= 600) {
      return "translateZ(90vw)";
    }
    return "translateZ(40vw)";
  };

  return (
    <div
      id="gallery"
      className="gallery-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <button className="nav-button left" onClick={handlePrev}>&#10094;</button>
      <div className="gallery">
        {panels.map((src, i) => {
          let offset = (i - currentIndex + panels.length) % panels.length;
          if (offset > panels.length / 2) offset -= panels.length;

          const isFocused = i === currentIndex;

          return (
            <div
              key={i}
              className={`panel ${isFocused ? "focused" : "blurred"}`}
              style={{
                backgroundImage: `url(${src})`,
                transform: `rotateY(${offset * angle}deg) ${getTranslateZ()} ${!isFocused ? "scale(0.8)" : ""}`
              }}
            ></div>
          );
        })}
      </div>
      <button className="nav-button right" onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default ThreeDGallery;
