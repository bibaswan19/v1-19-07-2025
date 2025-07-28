// Courses.jsx
import React, { useState } from "react";
import NavBar from "./components/CourseNav";
import "./Courses.css";
import { FaPlus, FaChevronDown, FaDownload } from "react-icons/fa";
import Footer from "./components/Footer";

const courses = [
  {
    title: "DEFENCE COURSE",
    image: require("./assets/National_Defence_Academy_NDA.png"),
    subtopics: [
      { title: "NDA", pdf: "/pdfs/nda.pdf", description: "Prepares students for the National Defence Academy entrance exams with complete syllabus coverage." },
      { title: "CDS", pdf: "/pdfs/cds.pdf", description: "Focused course for Combined Defence Services exam with regular mock tests and guidance." },
    ],
  },
  {
    title: "REGULATORY BODIES",
    image: require("./assets/regulatory-agencies-blue-gradient-concept-icon-regulatory-agencies-blue-gradient-concept-icon-test-control-safety-clinical-242938439.webp"),
    subtopics: [
      { title: "RBI", pdf: "/pdfs/rbi.pdf", description: "Comprehensive preparation for RBI Grade B and Assistant exams." },
      { title: "SEBI", pdf: "/pdfs/sebi.pdf", description: "Covers SEBI Grade A syllabus with financial and legal module focus." },
      { title: "SIDBI", pdf: "/pdfs/sidbi.pdf", description: "Structured course for Small Industries Development Bank of India exams." },
      { title: "NABARD", pdf: "/pdfs/nabard.pdf", description: "In-depth prep for NABARD Grade A & B with agriculture and rural focus." },
    ],
  },
  {
    title: "GOVT. JOB PREPARATION",
    image: require("./assets/unnamed.png"),
    subtopics: [
      { title: "UPSC CSE", pdf: "/pdfs/upsc.pdf", description: "Covers prelims and mains for UPSC CSE with detailed notes and mock tests." },
      { title: "SSC", pdf: "/pdfs/ssc.pdf", description: "CGL, CHSL and other SSC tier exams with full syllabus support." },
      { title: "BANKING", pdf: "/pdfs/banking.pdf", description: "IBPS, SBI PO/Clerk prep with mock tests and interview training." },
      { title: "RAIL/POLICE", pdf: "/pdfs/rail-police.pdf", description: "Covers RRB and Police constable/SI exams with physical tips." },
    ],
  },
  {
    title: "W.B.P.S.C & STATE LEVEL EXAMS",
    image: require("./assets/WBPSC-_1578390851.png"),
    subtopics: [
      { title: "WBCS", pdf: "/pdfs/wbcs.pdf", description: "Complete course for West Bengal Civil Services exams." },
      { title: "FOOD SI", pdf: "/pdfs/food-si.pdf", description: "Includes Food Sub-Inspector syllabus and previous year papers." },
      { title: "CLERKSHIP", pdf: "/pdfs/clerkship.pdf", description: "Covers clerical-level state jobs with practice sets." },
      { title: "ICDS / MISC", pdf: "/pdfs/icds.pdf", description: "Preparation for ICDS, Miscellaneous exams under PSC." },
    ],
  },
  {
    title: "LAW ENTRANCE",
    image: require("./assets/adalet-logo-png_seeklogo-341382.png"),
    subtopics: [
      { title: "CLAT", pdf: "/pdfs/clat.pdf", description: "Law entrance exam prep for CLAT UG & PG." },
      { title: "AILET", pdf: "/pdfs/ailet.pdf", description: "Covers AILET syllabus with mock tests and legal reasoning." },
      { title: "LSAT", pdf: "/pdfs/lsat.pdf", description: "Logical reasoning and reading comprehension for LSAT." },
    ],
  },
  {
    title: "MANAGEMENT ENTRANCE",
    image: require("./assets/management-logo.webp"),
    subtopics: [
      { title: "CAT", pdf: "/pdfs/cat.pdf", description: "Quant, DILR, and VARC with CAT-specific strategies." },
      { title: "MAT", pdf: "/pdfs/mat.pdf", description: "Covers the Management Aptitude Test with timed tests." },
      { title: "XAT", pdf: "/pdfs/xat.pdf", description: "XAT exam strategies including decision making and essays." },
      { title: "IPM", pdf: "/pdfs/ipm.pdf", description: "Integrated Program in Management (IPM) entrance preparation." },
    ],
  },
  {
    title: "SOFT SKILLS & TECH",
    image: require("./assets/soft-skills-training.jpg"),
    subtopics: [
      { title: "SPOKEN ENGLISH", pdf: "/pdfs/spoken.pdf", description: "Interactive sessions to improve English speaking fluency." },
      { title: "PERSONALITY DEVELOPMENT", pdf: "/pdfs/personality.pdf", description: "Confidence building, interviews, and soft skills training." },
      { title: "AI CODING", pdf: "/pdfs/ai-coding.pdf", description: "Learn coding for AI projects with Python basics." },
      { title: "HTML", pdf: "/pdfs/html.pdf", description: "Web development fundamentals using HTML, CSS, and examples." },
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
                        <div className="title-line">
                          <span className="arrow">➤</span>
                          <span className="sub-title">{sub.title}</span>
                        </div>
                        <p className="sub-desc">{sub.description}</p>
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
      <Footer />
    </>
  );
};

export default Courses;
