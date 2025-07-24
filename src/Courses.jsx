import React, { useState } from "react";
import NavBar from "./components/CourseNav";
import "./Courses.css";
import { FaPlus, FaChevronDown, FaDownload } from "react-icons/fa";

const courses = [
  {
    title: "DEFENCE COURSE",
    image: require("./assets/National_Defence_Academy_NDA.png"),
    subtopics: [
      { title: "NDA", pdf: "/pdfs/nda.pdf" },
      { title: "CDS", pdf: "/pdfs/cds.pdf" },
    ],
  },
  {
    title: "REGULATORY BODIES",
    image: require("./assets/regulatory-agencies-blue-gradient-concept-icon-regulatory-agencies-blue-gradient-concept-icon-test-control-safety-clinical-242938439.webp"),
    subtopics: [
      { title: "RBI", pdf: "/pdfs/rbi.pdf" },
      { title: "SEBI", pdf: "/pdfs/sebi.pdf" },
      { title: "SIDBI", pdf: "/pdfs/sidbi.pdf" },
      { title: "NABARD", pdf: "/pdfs/nabard.pdf" },
    ],
  },
  {
    title: "GOVT. JOB PREPARATION",
    image: require("./assets/unnamed.png"),
    subtopics: [
      { title: "UPSC CSE", pdf: "/pdfs/upsc.pdf" },
      { title: "SSC", pdf: "/pdfs/ssc.pdf" },
      { title: "BANKING", pdf: "/pdfs/banking.pdf" },
      { title: "RAIL/POLICE", pdf: "/pdfs/rail-police.pdf" },
    ],
  },
  {
    title: "W.B.P.S.C & STATE LEVEL EXAMS",
    image: require("./assets/WBPSC-_1578390851.png"),
    subtopics: [
      { title: "WBCS", pdf: "/pdfs/wbcs.pdf" },
      { title: "FOOD SI", pdf: "/pdfs/food-si.pdf" },
      { title: "CLERKSHIP", pdf: "/pdfs/clerkship.pdf" },
      { title: "ICDS / MISC", pdf: "/pdfs/icds.pdf" },
    ],
  },
  {
    title: "LAW ENTRANCE",
    image: require("./assets/adalet-logo-png_seeklogo-341382.png"),
    subtopics: [
      { title: "CLAT", pdf: "/pdfs/clat.pdf" },
      { title: "AILET", pdf: "/pdfs/ailet.pdf" },
      { title: "LSAT", pdf: "/pdfs/lsat.pdf" },
    ],
  },
  {
    title: "MANAGEMENT ENTRANCE",
    image: require("./assets/management-logo.webp"),
    subtopics: [
      { title: "CAT", pdf: "/pdfs/cat.pdf" },
      { title: "MAT", pdf: "/pdfs/mat.pdf" },
      { title: "XAT", pdf: "/pdfs/xat.pdf" },
      { title: "IPM", pdf: "/pdfs/ipm.pdf" },
    ],
  },
  {
    title: "SOFT SKILLS & TECH",
    image: require("./assets/soft-skills-training.jpg"),
    subtopics: [
      { title: "SPOKEN ENGLISH", pdf: "/pdfs/spoken.pdf" },
      { title: "PERSONALITY DEVELOPMENT", pdf: "/pdfs/personality.pdf" },
      { title: "AI CODING", pdf: "/pdfs/ai-coding.pdf" },
      { title: "HTML", pdf: "/pdfs/html.pdf" },
    ],
  },
];


const Courses = () => {
  const [expanded, setExpanded] = useState(Array(courses.length).fill(false));

  const toggleExpand = (index) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };

  return (
    <>
      <NavBar />
      <div className="courses-page">
        <h1 className="courses-heading">Check our different programs:</h1>
        <div className="course-list">
          {courses.map((course, index) => (
            <div className="course-item" key={index}>
              <div className="course-main">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-img"
                />
                <div className="course-info">
                  <h2>{course.title}</h2>
                  <button
                    className="toggle-btn"
                    onClick={() => toggleExpand(index)}
                  >
                    {expanded[index] ? <FaChevronDown /> : <FaPlus />}
                  </button>
                </div>
              </div>
              {expanded[index] && (
                <ul className="subtopics">
                  {course.subtopics.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <div className="left">
                        <span className="arrow">➤</span>
                        {sub.title}
                      </div>
                      <a
                        href={sub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-icon"
                      >
                        <FaDownload />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
