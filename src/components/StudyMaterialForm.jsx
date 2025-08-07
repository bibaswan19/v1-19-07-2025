import React, { useState, useEffect } from "react";
import "./StudyMaterialForm.css"; // Scoped CSS file

const StudyMaterialForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setPdfLink(initialData.pdfLink || "");
      setContent(initialData.content || "");
    } else {
      setTitle("");
      setPdfLink("");
      setContent("");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasPdf = pdfLink.trim() !== "";
    const hasContent = content.trim() !== "";

    if (!hasPdf && !hasContent) {
      setError("Please provide either a PDF link or some written content.");
      return;
    }

    const data = {
      title,
      pdfLink: hasPdf ? pdfLink.trim() : null,
      content: !hasPdf ? content.trim() : null,
    };

    setError("");
    onSubmit(data);

    setTitle("");
    setPdfLink("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="study-material-form">
      <input
        type="text"
        placeholder="Study Material Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="PDF Link (optional)"
        value={pdfLink}
        onChange={(e) => setPdfLink(e.target.value)}
      />
      {!pdfLink.trim() && (
        <textarea
          placeholder="Or write the content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      )}
      {error && <p>{error}</p>}
      <button type="submit">
        {initialData ? "Update" : "Add"} Study Material
      </button>
    </form>
  );
};

export default StudyMaterialForm;
