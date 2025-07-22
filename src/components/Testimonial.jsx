import React from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user.svg",
    rating: 5,
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/mentor/user2.png",
    rating: 5,
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/mentor/user3.png",
    rating: 5,
  },
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/mentor/user1.png",
    rating: 5,
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/mentor/user2.png",
    rating: 5,
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/mentor/user3.png",
    rating: 5,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;

    return (
      <>
        {[...Array(full)].map((_, i) => (
          <Icon key={`full-${i}`} icon="tabler:star-filled" className="star filled" />
        ))}
        {half === 1 && (
          <Icon icon="tabler:star-half-filled" className="star filled" />
        )}
        {[...Array(empty)].map((_, i) => (
          <Icon key={`empty-${i}`} icon="tabler:star-filled" className="star empty" />
        ))}
      </>
    );
  };

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-container">
        <div className="testimonial-carousel-wrapper">
          <Slider {...settings}>
            {TestimonialData.map((item, i) => (
              <div key={i} className="testimonial-slide">
                <div className={`testimonial-card ${i % 2 ? "shadow-alt" : "shadow"}`}>
                  <div className="testimonial-avatar">
                    <img
                      src={`${item.imgSrc}`}
                      alt={item.name}
                      width="80"
                      height="80"
                    />
                  </div>
                  <p className="testimonial-comment">{item.comment}</p>
                  <div className="testimonial-footer">
                    <div>
                      <h3 className="testimonial-name">{item.name}</h3>
                      <p className="testimonial-profession">{item.profession}</p>
                    </div>
                    <div className="testimonial-rating">{renderStars(item.rating)}</div>
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

export default Testimonial;
