import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./LetsChat.css";

const courseOptions = {
  defence: ["NDA", "CDS"],
  wbpsc: ["WBCS", "FOOD SI", "CLERKSHIP", "ICDS / MISC"],
  govt: ["UPSC CSE", "SSC", "BANKING", "RAIL/POLICE"],
  regulatory: ["RBI", "SEBI", "SIDBI", "NABARD"],
  law: ["CLAT", "AILET", "LSAT"],
  management: ["CAT", "MAT", "XAT", "IPM"],
  softskill: ["SPOKEN ENGLISH", "PERSONALITY DEVELOPMENT", "AI CODING", "HTML"],
};


const selectedCourseLabel = (key) => {
  switch (key) {
    case "defence":
      return "DEFENCE";
    case "wbpsc":
      return "W.B.P.S.C";
    case "govt":
      return "GOVT. JOB PREPARATION";
    case "regulatory":
      return "REGULATORY BODIES";
    case "law":
      return "LAW ENTRANCE";
    case "management":
      return "MANAGEMENT ENTRANCE";
    case "softskill":
    case "tech":
      return "SOFT SKILLS & TECH";
    default:
      return key.toUpperCase();
  }
};

const LetsChat = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSubtopic, setSelectedSubtopic] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedSubtopic("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      title: `Enquiry for ${selectedSubtopic} under ${selectedCourseLabel(selectedCourse)}`,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_e0jshri", // ✅ Your EmailJS Service ID
        "template_2n39bi4", // ✅ Replace with your Template ID
        templateParams,
        "ryVAjQoFUrgCz3vHr" // ✅ Replace with your EmailJS Public Key
      )
      .then(
        (res) => {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
          setSelectedCourse("");
          setSelectedSubtopic("");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="lets-chat-section" id="enquiry">
      <div className="chat-left">
        <h2>Let's chat.</h2>
        <p>
          We're happy to answer your questions and help you find the right
          course.
        </p>

        <div className="chat-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.0342095747715!2d88.42902517543253!3d26.711354076767737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441c767d78843%3A0x9dba89ce7b0f7e9f!2sBibaswan%20Educational%20Foundation%20%7C%20Best%20Coaching%20Center%20For%20UPSC(CSE%2FNDA%2FCDS)%20%7C%20WBCS%20%7C%20SSC%2FBANK%20%7C%20CAT%20in%20Siliguri..!5e0!3m2!1sen!2sin!4v1753374895557!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bibaswan Location"
          ></iframe>
        </div>
      </div>
      <div className="chat-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="course">What Program are you enquiring about?</label>
          <select
            id="course"
            value={selectedCourse}
            onChange={handleCourseChange}
            required
          >
            <option value="">-- Select a program --</option>
            <option value="defence">Defence Course</option>
            <option value="wbpsc">W.B.P.S.C</option>
            <option value="govt">Govt. Job Preparation</option>
            <option value="regulatory">Regulatory Bodies</option>
            <option value="law">Law Entrance</option>
            <option value="management">Management Entrance</option>
            <option value="tech">Soft Skills & Tech</option>
          </select>

          {selectedCourse && (
            <>
              <label htmlFor="subtopic">Which Course?</label>
              <select
                id="subtopic"
                value={selectedSubtopic}
                onChange={(e) => setSelectedSubtopic(e.target.value)}
                required
              >
                <option value="">-- Select a course --</option>
                {courseOptions[selectedCourse].map((sub, index) => (
                  <option key={index} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </>
          )}

          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button className="sendbt" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default LetsChat;
