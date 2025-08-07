import React, { useEffect, useState } from "react";
import {
  createNotification,
  deleteNotification,
  getNotifications,
  updateNotification,
} from "./api/notifications";

import {
  getStudyMaterials,
  createStudyMaterial,
  updateStudyMaterial,
  deleteStudyMaterial,
} from "./api/studyMaterials";

import NotificationForm from "./components/NotificationForm";
import StudyMaterialForm from "./components/StudyMaterialForm";

import "./AdminPage.css";

const AdminPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [editingNotification, setEditingNotification] = useState(null);

  const [studyMaterials, setStudyMaterials] = useState([]);
  const [editingMaterial, setEditingMaterial] = useState(null);

  const loadData = () => {
    getNotifications().then((res) => setNotifications(res.data));
    getStudyMaterials().then((res) => setStudyMaterials(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleNotificationSave = async (data) => {
    if (editingNotification) {
      await updateNotification(editingNotification._id, data);
      setEditingNotification(null);
    } else {
      await createNotification(data);
    }
    loadData();
  };

  const handleMaterialSave = async (data) => {
    if (editingMaterial) {
      await updateStudyMaterial(editingMaterial._id, data);
      setEditingMaterial(null);
    } else {
      await createStudyMaterial(data);
    }
    loadData();
  };

  return (
    <div className="admin-page">
      {/* Notifications Section */}
      <div className="admin-section notifications">
        <h2 className="admin-title">Manage Notifications</h2>
        <NotificationForm
          onSubmit={handleNotificationSave}
          initialData={editingNotification}
        />
        <h2 className="admin-title">List Notifications</h2>
        <ul className="admin-notification-list">
          {notifications.map((n) => (
            <li className="admin-notification-item" key={n._id}>
              <div className="admin-notification-content">
                <strong className="admin-notification-title">{n.title}</strong>
                <span className="admin-notification-date">
                  ({new Date(n.dateTime).toLocaleString()})
                </span>
              </div>
              <div className="admin-button-group">
                <button onClick={() => setEditingNotification(n)}>Edit</button>
                <button
                  onClick={async () => {
                    await deleteNotification(n._id);
                    loadData();
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Study Material Section */}
      <div className="admin-section study-materials">
        <h2 className="admin-title">Manage Study Materials</h2>
        <StudyMaterialForm
          onSubmit={handleMaterialSave}
          initialData={editingMaterial}
        />
        <h2 className="admin-title">List Study Materials</h2>
        <ul className="admin-notification-list">
          {studyMaterials.map((m) => (
            <li className="admin-notification-item" key={m._id}>
              <div className="admin-notification-content">
                <strong className="admin-notification-title">{m.title}</strong>
                <span className="admin-notification-date">
                  ({new Date(m.dateTime).toLocaleString()})
                </span>
              </div>
              <div className="admin-button-group">
                <button onClick={() => setEditingMaterial(m)}>Edit</button>
                <button
                  onClick={async () => {
                    await deleteStudyMaterial(m._id);
                    loadData();
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
