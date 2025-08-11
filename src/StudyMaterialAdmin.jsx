import React, { useEffect, useState } from "react";
import {
  getStudyMaterials,
  createStudyMaterial,
  updateStudyMaterial,
  deleteStudyMaterial,
} from "./api/studyMaterials";
import StudyMaterialForm from "./components/StudyMaterialForm";

const StudyMaterialAdmin = () => {
  const [studyMaterials, setStudyMaterials] = useState([]);
  const [editingMaterial, setEditingMaterial] = useState(null);

  const loadData = () => {
    getStudyMaterials().then((res) => setStudyMaterials(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

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
    <div className="admin-section" style={{ backgroundColor: "#ffe5daff" }}>
      <h2 className="admin-title">Manage Study Materials</h2>
      <StudyMaterialForm
        onSubmit={handleMaterialSave}
        initialData={editingMaterial}
      />
      <h2 className="admin-title">List Study Materials</h2>
      <ul className="admin-notification-list">
        {studyMaterials.map((m) => (
          <li key={m._id} className="admin-notification-item">
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
  );
};

export default StudyMaterialAdmin;
