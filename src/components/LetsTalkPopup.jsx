import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./LetsTalkPopup.css";

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

const LetsTalkPopup = ({ onClose }) => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSubtopic, setSelectedSubtopic] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "", // ✅ Added mobile
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
      title: `Enquiry for ${selectedSubtopic} under ${selectedCourseLabel(
        selectedCourse
      )}`,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      mobile: formData.mobile, // ✅ Pass mobile number to EmailJS
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_lz3rjxb",
        "template_no5aqqq",
        templateParams,
        "eorCp8jsra8V0B3OH"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "", // ✅ Reset mobile too
          message: "",
        });
        setSelectedCourse("");
        setSelectedSubtopic("");
        onClose();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="popup-content">
          <div className="popup-logo">
            <img src={require("../assets/logoimage.png")} alt="Logo" />
          </div>
          <div className="popup-form">
            <h2>Let's Talk</h2>
            <form onSubmit={handleSubmit}>
              <label>What Program are you enquiring about?</label>
              <select
                value={selectedCourse}
                onChange={handleCourseChange}
                required
              >
                <option value="">-- Select a program --</option>
                {Object.keys(courseOptions).map((courseKey) => (
                  <option key={courseKey} value={courseKey}>
                    {selectedCourseLabel(courseKey)}
                  </option>
                ))}
              </select>

              {selectedCourse && (
                <>
                  <label>Which Course?</label>
                  <select
                    value={selectedSubtopic}
                    onChange={(e) => setSelectedSubtopic(e.target.value)}
                    required
                  >
                    <option value="">-- Select a course --</option>
                    {courseOptions[selectedCourse].map((sub, idx) => (
                      <option key={idx} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </>
              )}

              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit mobile number"
              />

              <textarea
                name="message"
                placeholder="Write your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="send-bt">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalkPopup;



