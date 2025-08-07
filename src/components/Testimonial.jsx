import React from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    name: "Debarpita Majumder",
    profession: "UPSC – CSE ASPIRANT",
    comment:
      "I joined Bibaswan Educational Foundation last december for UPSC coaching.This institute provides an exceptional learning experience with highly knowledgeable and dedicated faculty.Teachers are very helpful.The institute's mock tests are very effective .The books that are given by the institute are very much helpful.I am glad that I joined this institute .",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4,
  },
  {
    name: "Sriti Pandey",
    profession: "UPSC – CSE ASPIRANT",
    comment:
      "Highly impressed by the institution as I'm preparing for the course UPSE- CSE !! Superb mentors teaching with full enthusiasm, exquisite learning skills with many facilities.\nI'll highly recommend all the aspirants to please join the institution for the betterment and the bright future ",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4.5,
  },
  {
    name: "Debajit Sanyal",
    profession: "SSC ASPIRANT",
    comment:
      "Teachers are enthusiastic and teacher knowledge is excellent . With this course I got useful knowledge and dedication towards the ssc examination",
    imgSrc: "/images/testimonial/user.svg",
    rating: 3.5,
  },
  {
    name: "Dhruba Roy",
    profession: "NDA ASPIRANT",
    comment:
      "I took an admission here 2 months ago for NDA examination , all of the teachers are very helpful and sweet they explains every topic with a touch of real life . The extra classes helps very much and the mock tests helps me to maintain time and knowledge. The spoken english class helps me to level up my english knowledge and confidence. At last I will say “Excellent guidance with a perfect mix of academics, personality development” is a perfect definition of my institute",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4.5,
  },
  {
    name: "Jaya Saha",
    profession: "WBCS ASPIRANT",
    comment:
      "I initially joined Bibaswan Educational Foundation for their spoken English class, which significantly improved my communication skills and boosted my confidence in speaking English. Encouraged by this progress, I enrolled in their WBCS coaching classes. The classes have been incredibly helpful; day by day, my understanding of the basic concepts has improved. I am thoroughly satisfied with my decision to join this institute for both courses. The quality of teaching and the supportive environment have made a substantial impact on my preparation and confidence.",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4.2,
  },
  {
    name: "Dhendup Palsang Sherpa",
    profession: "NDA ASPIRANT",
    comment:
      "The institute is a must for students who are willing to purse the NDA as the classes are well oriented and the staff members help students to their full capability. The environment gives a positive impact on the student. The extra classes help the students who are academically weak catch up to their peers. My experience in this institute was delightful.",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4.3,
  },
  {
    name: "Koushik Roy",
    profession: "SPOKEN ENGLISH STUDENT",
    comment:
      "This is a great institute for learning spoken English. The teachers are friendly, and the classes are easy to understand. It helped me improve my speaking skills and gain confidence. I would recommend it to others.",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4,
  },
  {
    name: "Pappu Singh",
    profession: "CDS ASPIRANT",
    comment:
      "Ami Pappu Singh.Ami Bibaswan e UPSC - CDS exam er jonno join korechi.Amr Basic bhison week chilo but day by day ager theke Improvement hocche . Foundation Class and After Class Mock Test bhison helpfull.Administratin Team & Faculty Team guidance bhison bhalo ekhane .",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4.2,
  },
  {
    name: "Nababarsha Rakshit",
    profession: "CLAT ASPIRANT",
    comment:
      "I have been doing classes in this prestigious institution for my preparation for CLAT examination for last few months. Hello fellas! , I am Nababarsha currently studying in Class 12th and i am going to appear for CLAT examination this year, so that as soon as I pass my class 12th Examination, i can get enrolled in a Law College. I chose CLAT because through this examination, i can get into top 20 Law Colleges and clearing this examination will help me do my internship in Supreme Court of India. I have thoroughly enjoying this process because here the materials are provided, classes are arranged according to my convenience and mock tests are taken on daily basis so that one can check their progress while learning. Here we are provided with a broad interface for various government exams. Here classes are based on my convience and learning speed. So I can enjoy it without extreme pressure.",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4.5,
  },
  {
    name: "Souman Roy",
    profession: "CDS ASPIRANT",
    comment:
      "I enrolled here for UPSC CDS exam preparation.\n\n\"I'm thoroughly impressed with the exceptional faculty and study materials provided by Bibaswan educational foundation .\nThe Teachers are highly knowledgeable, supportive, and passionate about teaching. They explain complex concepts in a clear, concise manner, making it easy to understand and retain.\n\nThe study materials provided are comprehensive, up-to-date, and well-structured. The resources include detailed notes video lectures and practice exercises that help reinforce learning. Monthly mock test proved to be very helpful. I've found the materials to be incredibly helpful in preparing for CDS exam.\n\nOverall, I'm extremely satisfied with the faculty and study materials at Bibaswan educational foundation. If you're looking for a proper coaching institute for CDS and NDA in Siliguri then Bibaswan educational foundation is best for you.",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4.7,
  },
  {
    name: "Jyoti Haldar",
    profession: "COMBINED-SSC,BANK &RAILWAY ASPIRANT",
    comment:
      "Ami combined er jonno Bibaswan Education Foundation e admission niyechi. Ekane amader khub jotno sohokare porano hoy. R Spacially history class. Everyday class e amader test neoya hoche jate amara exam e bhalo korte pari. So thank you Bibaswan Education Foundation.",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4.3,
  },
  {
    name: "Riyaj Hussain",
    profession: "WBCS ASPIRANT",
    comment:
      "Highly structured and effective WBCS preparation! The mock tests after each class are a game-changer, and the study materials are top-notch. Completely satisfied with the quality of teaching and support...",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4.4,
  },
  {
    name: "Suman Saha",
    profession: "RAILWAY ASPIRANT",
    comment:
      "Hi, my name is Suman Saha I have been enrolled for RRB NTPC and joined this institute. Bibaswan Education foundation and it is the finest coaching centre in Siliguri. This institute is specialised for competitive exams. They have experienced and cooperative faculty. Their curriculum is totally focus on exam and provides individualized focus on students.\nThey also provide study material and also mock test and specialised online classes with interactive learning. As the location is near to college the college students can avail this learning opportunity.",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4.3,
  },
  {
    name: "Subekcha Rai",
    profession: "COMBINED-SSC,BANK &RAILWAY ASPIRANT",
    comment:
      "My name is Subekcha Rai i study in this institute ..Bisbaswan intstitute very helpfur for me combined courses . the teachers and the staffs are very friendly nature..",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4.1,
  },
  {
    name: "Dip Sarkar",
    profession: "SPOKEN ENGLISH STUDENT",
    comment:
      "I like this foundation. After joining this foundation my english become strong and I can easily speak in english..",
    imgSrc: "/images/testimonial/user.svg",
    rating: 4.2,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-carousel-wrapper">
          <Slider {...settings}>
            {TestimonialData.map((item, i) => (
              <div key={i} className="testimonial-slide">
                <div className={`testimonial-card ${i % 2 ? "shadow-alt" : "shadow"}`}>
                  <div className="testimonial-avatar">
                    <img src={item.imgSrc} alt={item.name} width="80" height="80" />
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
