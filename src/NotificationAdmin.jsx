import React, { useEffect, useState } from "react";
import {
  createNotification,
  deleteNotification,
  getNotifications,
  updateNotification,
} from "./api/notifications";
import NotificationForm from "./components/NotificationForm";

const NotificationAdmin = () => {
  const [notifications, setNotifications] = useState([]);
  const [editingNotification, setEditingNotification] = useState(null);

  const loadData = () => {
    getNotifications().then((res) => setNotifications(res.data));
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

  return (
    <div className="admin-section" style={{ backgroundColor: "#daf2ffff" }}>
      <h2 className="admin-title">Manage Notifications</h2>
      <NotificationForm
        onSubmit={handleNotificationSave}
        initialData={editingNotification}
      />
      <h2 className="admin-title">List Notifications</h2>
      <ul className="admin-notification-list">
        {notifications.map((n) => (
          <li key={n._id} className="admin-notification-item">
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
  );
};

export default NotificationAdmin;
