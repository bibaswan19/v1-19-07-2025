import React from "react";
import Slider from "react-slick";
import "./CourseCarousel.css";

const CourseCarousel = () => {
  const courseData = [
    { title: "UPSC CSE", author: "View Price ₹", image: require("../assets/c2.jpeg"), link: "/courses/figma" },
    { title: "BANKING", author: "View Price ₹", image: require("../assets/c2.jpeg"), link: "/courses/webflow-launch" },
    { title: "NDA", author: "View Price ₹", image: require("../assets/c2.jpeg"), link: "/courses/react-patterns" },
    { title: "FOOD SI", author: "View Price ₹", image: require("../assets/c2.jpeg"), link: "/courses/uiux" },
    { title: "LSAT", author: "View Price ₹", image: require("../assets/c1.jpeg"), link: "/courses/nodejs" },
    { title: "MAT", author: "View Price ₹", image: require("../assets/c1.jpeg"), link: "/courses/js-basics" },
    { title: "CAT", author: "View Price ₹", image: require("../assets/c1.jpeg"), link: "/courses/nextjs" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    centerMode: false, // ✅ Disabled
    centerPadding: "0px", // ✅ No side padding
    slidesToShow: 3, // ✅ Show 3 at a time
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
              <a className="know-more" href={course.link}>
                KNOW MORE
              </a>
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
