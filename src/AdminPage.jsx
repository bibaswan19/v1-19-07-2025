import React, { useEffect, useState } from "react";
import {
  createNotification,
  deleteNotification,
  getNotifications,
  updateNotification,
} from "./api/notifications";
import NotificationForm from "./components/NotificationForm";
import "./AdminPage.css";

const AdminPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadData = () => {
    getNotifications().then((res) => setNotifications(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async (data) => {
    if (editing) {
      await updateNotification(editing._id, data);
      setEditing(null);
    } else {
      await createNotification(data);
    }
    loadData();
  };

  return (
    <div className="admin-page">
      <h2 className="admin-title">Manage Notifications</h2>
      <NotificationForm onSubmit={handleSave} initialData={editing} />
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
              <button onClick={() => setEditing(n)}>Edit</button>
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
  );
};

export default AdminPage;
