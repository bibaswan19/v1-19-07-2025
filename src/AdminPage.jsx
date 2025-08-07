import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <h2 className="admin-title">Admin Dashboard</h2>
      <div className="admin-nav-buttons">
        <button onClick={() => navigate("/admin/notifications")}>
          Manage Notifications
        </button>
        <button onClick={() => navigate("/admin/study-materials")}>
          Manage Study Materials
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
