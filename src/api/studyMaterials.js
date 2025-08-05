import axios from "axios";

const API_URL = "https://backend-xi-ten-35.vercel.app/api/study-materials";

export const getStudyMaterials = () => axios.get(API_URL);

export const createStudyMaterial = (data) => axios.post(API_URL, data);

export const updateStudyMaterial = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteStudyMaterial = (id) => axios.delete(`${API_URL}/${id}`);
