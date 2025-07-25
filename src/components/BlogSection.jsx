import React from "react";
import Slider from "react-slick";
import "./BlogSection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import I1 from "../assets/g2.jpg";

const blogData = [
  {
    id: 1,
    title: "How to Improve Your Coding Skills",
    date: "July 10, 2025",
    image: I1,
    excerpt:
      "Discover practical tips to level up your programming journey.",
    link: "https://example.com/blog/coding-skills",
  },
  {
    id: 2,
    title: "React Best Practices in 2025",
    date: "July 5, 2025",
    image: I1,
    excerpt:
      "Explore modern conventions for writing clean, scalable React code.",
    link: "https://example.com/blog/react-best-practices",
  },
  {
    id: 3,
    title: "UI/UX Design Tips for Developers",
    date: "June 28, 2025",
    image: I1,
    excerpt:
      "Understand how developers can create visually pleasing interfaces.",
    link: "https://example.com/blog/ui-ux-tips",
  },
  {
    id: 4,
    title: "JavaScript Performance Optimization",
    date: "June 15, 2025",
    image: I1,
    excerpt: "Learn techniques to make your JS apps run faster and smoother.",
    link: "https://example.com/blog/js-performance",
  },
];

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const BlogSection = () => {
  const settings = {
    dots: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-slider">
          <Slider {...settings}>
            {blogData.map((blog) => (
              <div key={blog.id}>
                <div className="blog-card">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                  />
                  <div className="blog-content">
                    <p className="blog-date">{blog.date}</p>
                    <h3 className="blog-heading">{blog.title}</h3>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="read-more-btn"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
