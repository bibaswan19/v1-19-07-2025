// Courses.jsx
import React, { useState } from "react";
import NavBar from "./components/CourseNav";
import "./Courses.css";
import { FaPlus, FaChevronDown, FaDownload } from "react-icons/fa";
import Footer from "./components/Footer";

const courses = [
  {
    title: "UPSC",
    image: require("./assets/regulatory-agencies-blue-gradient-concept-icon-regulatory-agencies-blue-gradient-concept-icon-test-control-safety-clinical-242938439.webp"),
    subtopics: [
      { title: "CIVIL SERVICE EXAMINATIONS (C.S.E) ", pdf: "/pdfs/rbi.pdf", description: "Complete preparation for UPSC Civil Services Examination (CSE) covering Prelims, Mains, and Interview with expert mentorship and updated study materials." },
    ],
  },
  {
    title: "DEFENCE COURSE",
    image: require("./assets/National_Defence_Academy_NDA.png"),
    subtopics: [
      { title: "NDA", pdf: "/pdfs/nda.pdf", description: "Prepares students for the National Defence Academy entrance exams with complete syllabus coverage." },
      { title: "CDS", pdf: "/pdfs/cds.pdf", description: "Focused course for Combined Defence Services exam with regular mock tests and guidance." },
    ],
  },
  {
    title: "WBCS & OTHERS W.B.P.S.C EXAMS",
    image: require("./assets/WBPSC-_1578390851.png"),
    subtopics: [
      { title: "WBCS", pdf: "/pdfs/wbcs.pdf", description: "Complete course for West Bengal Civil Services exams." },
      { title: "FOOD SI", pdf: "/pdfs/food-si.pdf", description: "Includes Food Sub-Inspector syllabus and previous year papers." },
      { title: "CLERKSHIP", pdf: "/pdfs/clerkship.pdf", description: "Covers clerical-level state jobs with practice sets." },
      { title: "MISCELLANEOUS", pdf: "/pdfs/icds.pdf", description: "Dedicated preparation for various state and central competitive exams with comprehensive study plans, practice tests, and expert guidance." },
      { title: "WBP", pdf: "/pdfs/icds.pdf", description: "Focused preparation for West Bengal Police (WBP) Constable and SI exams with updated syllabus coverage, mock tests, and expert support." },
    ],
  },
  {
    title: "COMBINED EXAMS",
    image: require("./assets/unnamed.png"),
    subtopics: [
      { title: "SSC", pdf: "/pdfs/ssc.pdf", description: "CGL, CHSL and other SSC tier exams with full syllabus support." },
      { title: "BANK", pdf: "/pdfs/banking.pdf", description: "Complete coaching for Bank exams like IBPS, SBI, and RBI with updated materials, mock tests, and expert-led classes for Prelims and Mains." },
      { title: "RAIL", pdf: "/pdfs/rail-police.pdf", description: "Thorough preparation for Railway exams like RRB NTPC, Group D, and ALP with latest syllabus coverage, practice sets, and expert guidance." },
    ],
  },
  {
    title: "STAFF SELECTION COMMISION (SSC ) ",
    image: require("./assets/unnamed.png"),
    subtopics: [
      { title: "SSC", pdf: "/pdfs/ssc.pdf", description: "CGL, CHSL and other SSC tier exams with full syllabus support." },
    ],
  },
  {
    title: "BANKING",
    image: require("./assets/unnamed.png"),
    subtopics: [
      { title: "P.O", pdf: "/pdfs/ssc.pdf", description: "Expert-led preparation for Bank P.O. exams (IBPS, SBI, etc.) with focused training on Prelims, Mains, and Interview rounds." },
      { title: "CLERK", pdf: "/pdfs/ssc.pdf", description: "Structured coaching for Bank Clerk exams (IBPS, SBI, etc.) with updated syllabus, regular mock tests, and personalized guidance." },
    ],
  },
   {
    title: "RAIL",
    image: require("./assets/unnamed.png"),
    subtopics: [
      { title: "RAIL", pdf: "/pdfs/ssc.pdf", description: "Comprehensive preparation for Railway exams like RRB NTPC, Group D, ALP, and Technician with updated content, mock tests, and expert support." },
    ],
  },
  {
    title: "LAW ENTRANCE",
    image: require("./assets/adalet-logo-png_seeklogo-341382.png"),
    subtopics: [
      { title: "CLAT", pdf: "/pdfs/clat.pdf", description: "Focused preparation for CLAT with expert faculty, updated legal reasoning materials, mock tests, and personalized mentorship for top law school admissions." },
    ],
  },
  {
    title: "MANAGEMENT ENTRANCE",
    image: require("./assets/management-logo.webp"),
    subtopics: [
      { title: "CAT", pdf: "/pdfs/cat.pdf", description: "Quant, DILR, and VARC with CAT-specific strategies." },
      { title: "MAT", pdf: "/pdfs/mat.pdf", description: "Covers the Management Aptitude Test with timed tests." },
      { title: "XAT", pdf: "/pdfs/xat.pdf", description: "XAT exam strategies including decision making and essays." },
    ],
  },
  {
    title: "SOFT SKILLS & TECH",
    image: require("./assets/soft-skills-training.jpg"),
    subtopics: [
      { title: "SPOKEN ENGLISH", pdf: "/pdfs/spoken.pdf", description: "Interactive sessions to improve English speaking fluency." },
      { title: "PERSONALITY DEVELOPMENT", pdf: "/pdfs/personality.pdf", description: "Confidence building, interviews, and soft skills training." },
      { title: "PROGRAMMING ", pdf: "/pdfs/ai-coding.pdf", description: "Hands-on programming courses with real-world projects, expert mentorship, and training in languages like Python, Java, C++, and more." },
    ],
  },
];

const Courses = ({ onOpenPopup }) => {
  const [expanded, setExpanded] = useState(Array(courses.length).fill(false));

  const toggleExpand = (index) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };

  return (
    <>
      <NavBar onOpenPopup={onOpenPopup} />
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
