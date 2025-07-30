import React from "react";
import Slider from "react-slick";
import "./CourseCarousel.css";

const CourseCarousel = ({ onOpenPopup }) => {
  const courseData = [
    { title: "UPSC CSE", author: "View Price ₹", image: require("../assets/c2.jpeg") },
    { title: "BANKING", author: "View Price ₹", image: require("../assets/c2.jpeg") },
    { title: "NDA", author: "View Price ₹", image: require("../assets/c2.jpeg") },
    { title: "FOOD SI", author: "View Price ₹", image: require("../assets/c2.jpeg") },
    { title: "LSAT", author: "View Price ₹", image: require("../assets/c1.jpeg") },
    { title: "MAT", author: "View Price ₹", image: require("../assets/c1.jpeg") },
    { title: "CAT", author: "View Price ₹", image: require("../assets/c1.jpeg") },
  ];

  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="carousel-wrapper" id="popular-courses">
      <div className="carousel-header">
        <h2>Popular courses.</h2>
        <a href="/courses" className="explore-link">
          Explore courses ➤
        </a>
      </div>

      <Slider {...settings} className="carousel-slider">
        {courseData.map((course, i) => (
          <div className="course-card" key={i}>
            <div className="image-wrapper">
              <img src={course.image} alt={course.title} />
              <button
                className="know-more"
                onClick={() => onOpenPopup && onOpenPopup()}
              >
                KNOW MORE
              </button>
            </div>
            <h3>{course.title}</h3>
            <p>{course.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseCarousel;