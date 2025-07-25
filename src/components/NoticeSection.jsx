import React from "react";
import "./NoticeSection.css";

const notices = [
  {
    id: 1,
    text: "Admission open for 2025 batch - Limited seats available!",
    link: "#",
  },
  {
    id: 2,
    text: "Upcoming seminar on Web Development - Register Now!",
    link: "#",
  },
  {
    id: 3,
    text: "Mid-term exams scheduled from August 10th to 20th.",
    link: "#",
  },
];

const NoticeSection = () => {
  return (
    <div className="notice-wrapper">
      <div className="notice-track">
        {[...notices, ...notices].map((notice, index) => (
          <div className="notice-item" key={index}>
            <span>{notice.text}</span>
            <a
              href={notice.link}
              className="notice-link"
              onClick={(e) => e.preventDefault()}
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeSection;
