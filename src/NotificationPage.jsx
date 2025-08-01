import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaDownload } from "react-icons/fa";
import { jsPDF } from "jspdf";
import CourseNavbar from "./components/CourseNav";
import Footer from "./components/Footer";
import "./NotificationPage.css"; // 🔗 Link external CSS

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-xi-ten-35.vercel.app/api/notifications")
      .then((res) => setNotifications(res.data))
      .catch((err) => console.error("Error fetching notifications:", err));
  }, []);

const openContentAsPDF = (title, content) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const lineHeight = 8;
  const maxLineWidth = pageWidth - margin * 2;

  let cursorY = margin;

  const breakLongWords = (text, maxLength = 80) =>
    text.replace(
      new RegExp(`(\\S{${maxLength},})`, "g"),
      (match) => match.match(new RegExp(`.{1,${maxLength}}`, "g")).join(" ")
    );

  // Title
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(16);
  const titleLines = doc.splitTextToSize(title, maxLineWidth);
  doc.text(titleLines, margin, cursorY);
  cursorY += lineHeight * titleLines.length + 4;

  // Content
  doc.setFont("Courier", "normal");
  doc.setFontSize(12);
  const cleanContent = breakLongWords(content);
  const contentLines = doc.splitTextToSize(cleanContent, maxLineWidth);

  contentLines.forEach((line) => {
    if (cursorY + lineHeight > pageHeight - margin) {
      doc.addPage();
      cursorY = margin;
    }
    doc.text(line, margin, cursorY);
    cursorY += lineHeight;
  });

  const pdfBlob = doc.output("blob");
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl, "_blank");
};




  return (
    <div className="body">
      <CourseNavbar />
      <div className="notification-container">
        <h2 className="notification-heading">Notifications</h2>
        <ul className="notification-list">
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">
              <div className="notification-content">
                <strong>{notification.title}</strong>
                <p>
                  {notification.dateTime
                    ? new Date(notification.dateTime).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                    : "No date"}
                </p>
              </div>

              {notification.pdfLink ? (
                <a
                  href={notification.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notification-icon"
                  title="Open PDF"
                >
                  <FaDownload />
                </a>
              ) : notification.content ? (
                <button
                  className="notification-icon"
                  onClick={() =>
                    openContentAsPDF(notification.title, notification.content)
                  }
                  title="View as PDF"
                >
                  <FaDownload />
                </button>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default NotificationPage;
