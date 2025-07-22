import React, { useRef, useState, useEffect } from 'react';
import './CourseCarousel.css';

const CourseCarousel = () => {
  const visibleCount = 3;
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const courseData = [
    { title: 'UPSC CSE', author: 'Colt stelle', image: require('../assets/heroimage.jpg'), link: '/courses/figma' },
    { title: 'BANKING', author: 'Colt stelle', image: require('../assets/heroimage.jpg'), link: '/courses/webflow-launch' },
    { title: 'NDA', author: 'Jane Doe', image: require('../assets/heroimage.jpg'), link: '/courses/react-patterns' },
    { title: 'FOOD SI', author: 'Alice Chan', image: require('../assets/heroimage.jpg'), link: '/courses/uiux' },
    { title: 'LSAT', author: 'Mark Henry', image: require('../assets/heroimage.jpg'), link: '/courses/nodejs' },
    { title: 'MAT', author: 'Sarah Linn', image: require('../assets/heroimage.jpg'), link: '/courses/js-basics' },
    { title: 'CAT', author: 'Tom Hardy', image: require('../assets/heroimage.jpg'), link: '/courses/nextjs' },
  ];

  const cardWidth = 320; // includes margin
  const maxIndex = courseData.length - visibleCount;

  const nextSlide = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  // Drag functionality
  useEffect(() => {
    const track = trackRef.current;
    let isDown = false;
    let startX, scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.classList.add('dragging');
    };

    const onMouseLeave = () => {
      isDown = false;
      track.classList.remove('dragging');
    };

    const onMouseUp = () => {
      isDown = false;
      track.classList.remove('dragging');
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    };

    track.addEventListener('mousedown', onMouseDown);
    track.addEventListener('mouseleave', onMouseLeave);
    track.addEventListener('mouseup', onMouseUp);
    track.addEventListener('mousemove', onMouseMove);

    return () => {
      track.removeEventListener('mousedown', onMouseDown);
      track.removeEventListener('mouseleave', onMouseLeave);
      track.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="carousel-wrapper" id="popular-courses">
      <div className="carousel-header">
        <h2>Popular courses.</h2>
        <a href="/courses" className="explore-link">Explore courses ➤</a>
      </div>

      <div className="carousel">
        <button className="nav-button left" onClick={prevSlide}>◀</button>

        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            ref={trackRef}
            style={{ transform: `translateX(-${index * cardWidth}px)` }}
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

        <button className="nav-button right" onClick={nextSlide}>▶</button>
      </div>
    </div>
  );
};

export default CourseCarousel;
