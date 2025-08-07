import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaDownload } from "react-icons/fa";
import { jsPDF } from "jspdf";
import CourseNavbar from "./components/CourseNav";
import Footer from "./components/Footer";
import "./StudyMaterialPage.css";

const StudyMaterialPage = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-xi-ten-35.vercel.app/api/study-materials")
      .then((res) => setMaterials(res.data))
      .catch((err) =>
        console.error("Error fetching study materials:", err)
      );
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
      <div className="study-container">
        <h2 className="study-heading">Study Materials</h2>
        <ul className="study-list">
          {materials.map((material, index) => (
            <li key={index} className="study-item">
              <div className="study-content">
                <strong>{material.title}</strong>
                <p>
                  {material.dateTime
                    ? new Date(material.dateTime).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                    : "No date"}
                </p>
              </div>

              {material.pdfLink ? (
                <a
                  href={material.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="study-icon"
                  title="Open PDF"
                >
                  <FaDownload />
                </a>
              ) : material.content ? (
                <button
                  className="study-icon"
                  onClick={() =>
                    openContentAsPDF(material.title, material.content)
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

export default StudyMaterialPage;
