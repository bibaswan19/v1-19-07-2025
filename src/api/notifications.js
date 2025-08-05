import axios from "axios";

const API_URL = "https://backend-xi-ten-35.vercel.app/api/notifications";

export const getNotifications = () => axios.get(API_URL);
export const createNotification = (data) => axios.post(API_URL, data);

export const updateNotification = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);
export const deleteNotification = (id) => axios.delete(`${API_URL}/${id}`);
