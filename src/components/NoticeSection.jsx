import React, { useEffect, useState } from "react";
import "./NoticeSection.css";
import { getNotifications } from "../api/notifications"; // adjust the path if needed

const NoticeSection = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await getNotifications();
        // Assuming the response data is an array of notification objects with a `title` field
        const titles = response.data.map((item) => ({
          id: item._id || item.id, // use _id from MongoDB or id
          text: item.title,
          link: "/notification", // static link for now
        }));
        setNotices(titles);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="notice-wrapper">
      <div className="notice-track">
        {[...notices, ...notices].map((notice, index) => (
          <div className="notice-item" key={index}>
            <span>{notice.text}</span>
            <a
              href={notice.link}
              className="notice-link"
              onClick={() => (window.location.href = notice.link)}
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
