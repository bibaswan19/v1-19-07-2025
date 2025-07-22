import React, { useRef, useState, useEffect } from 'react';
import './CourseCarousel.css';

const CourseCarousel = () => {
  const visibleCount = 3;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  const courseData = [
    { title: 'UPSC CSE', author: 'View Price ₹', image: require('../assets/heroimg.png'), link: '/courses/figma' },
    { title: 'BANKING', author: 'View Price ₹', image: require('../assets/heroimg.png'), link: '/courses/webflow-launch' },
    { title: 'NDA', author: 'View Price ₹', image: require('../assets/heroimg.png'), link: '/courses/react-patterns' },
    { title: 'FOOD SI', author: 'View Price ₹', image: require('../assets/heroimg.png'), link: '/courses/uiux' },
    { title: 'LSAT', author: 'View Price ₹', image: require('../assets/heroimg.png'), link: '/courses/nodejs' },
    { title: 'MAT', author: 'View Price ₹', image: require('../assets/heroimg.png'), link: '/courses/js-basics' },
    { title: 'CAT', author: 'View Price ₹', image: require('../assets/heroimg.png'), link: '/courses/nextjs' },
  ];

  const maxIndex = courseData.length - visibleCount;

  // Infinite loop logic
  const nextSlide = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  return (
    <div className="carousel-wrapper" id="popular-courses">
      <div className="carousel-header">
        <h2>Popular courses.</h2>
        <a href="/courses" className="explore-link">Explore courses ➤</a>
      </div>

      <div className="carousel">
        <button className="nav-button left" onClick={prevSlide}>🢠</button>

        <div
          className="carousel-track-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="carousel-track"
            ref={trackRef}
            style={{ transform: `translateX(-${index * (100 / 3 + 0.5)}%)` }}
          >
            {courseData.map((course, i) => (
              <div className="course-card" key={i}>
                <div className="image-wrapper">
                  <img src={course.image} alt={course.title} />
                  <a className="know-more" href={course.link}>KNOW MORE</a>
                </div>
                <h3>{course.title}</h3>
                <p>{course.author}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-button right" onClick={nextSlide}>🢡</button>
      </div>
    </div>
  );
};

export default CourseCarousel;
