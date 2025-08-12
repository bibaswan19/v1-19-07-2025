import React from "react";
import Slider from "react-slick";
import "./BlogSection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const blogData = [
  {
    id: 1,
    title: "UPSC Preparation Tips – Achieve Success with Right Guidance",
    date: "Aug 11, 2025",
    image: "https://img.youtube.com/vi/qmiHzllUy08/maxresdefault.jpg",
    excerpt:
      "Essential UPSC preparation tips to help you prepare efficiently for success.",
    link: "https://youtu.be/qmiHzllUy08?si=WCjRCNJqTlY4Fn3I",
  },
  {
    id: 2,
    title: "Bibaswan – Motivational Clip for Aspirants",
    date: "Aug 11, 2025",
    image: "https://img.youtube.com/vi/fAjHyTTc-8I/maxresdefault.jpg",
    excerpt:
      "A short motivational clip to inspire UPSC and competitive exam aspirants.",
    link: "https://youtube.com/shorts/fAjHyTTc-8I?si=PidTtiTu1OhFu0hn",
  },
  {
    id: 3,
    title: "Success Story – Never Give Up",
    date: "Aug 11, 2025",
    image: "https://img.youtube.com/vi/nFCqShOczgM/maxresdefault.jpg",
    excerpt:
      "An inspiring success story to remind you that perseverance always pays off.",
    link: "https://youtube.com/shorts/nFCqShOczgM?si=JV4OZXHAkrHT6UTI",
  },
  {
    id: 4,
    title: "Time Management for UPSC Preparation",
    date: "Aug 11, 2025",
    image: "https://img.youtube.com/vi/35ET1gT1mGo/maxresdefault.jpg",
    excerpt:
      "Learn how to manage your time effectively during UPSC preparation.",
    link: "https://youtube.com/shorts/35ET1gT1mGo?si=J6oaEoI_RiSShb7l",
  },
  {
    id: 5,
    title: "Daily Motivation for Competitive Exams",
    date: "Aug 11, 2025",
    image: "https://img.youtube.com/vi/Ocn5tRIr1uk/maxresdefault.jpg",
    excerpt:
      "Daily motivation to keep you consistent and focused on your exam goals.",
    link: "https://youtube.com/shorts/Ocn5tRIr1uk?si=TWk0nZtS7tqEvyq7",
  },
  {
    id: 6,
    title: "Push Your Limits – Stay Consistent",
    date: "Aug 11, 2025",
    image: "https://img.youtube.com/vi/1XPt9NY-SP4/maxresdefault.jpg",
    excerpt:
      "A reminder that success comes to those who push their limits every day.",
    link: "https://youtube.com/shorts/1XPt9NY-SP4?si=ayQjTtjHaSCawN64",
  },
  {
    id: 7,
    title: "Powerful Motivation for UPSC Students",
    date: "Aug 11, 2025",
    image: "https://img.youtube.com/vi/X0n6-UAgANE/maxresdefault.jpg",
    excerpt:
      "Powerful motivational words to boost your energy and focus.",
    link: "https://youtube.com/shorts/X0n6-UAgANE?si=XIvbyRN2rFPVBO86",
  },
  {
    id: 8,
    title: "Discipline – The Key to Cracking Exams",
    date: "Aug 11, 2025",
    image: "https://img.youtube.com/vi/QctU9SDnYt4/maxresdefault.jpg",
    excerpt:
      "Discipline is the foundation of success in any competitive examination.",
    link: "https://youtube.com/shorts/QctU9SDnYt4?si=6IRFb3XVcf_pibj0",
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
                      Watch Video
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
