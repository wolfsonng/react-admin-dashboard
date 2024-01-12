import axios from "axios";

const API_URL = "http://localhost:8000";

const fetchUsers = () => {
  return axios.get(`${API_URL}/users`);
};

const addUser = (userData) => {
  return axios.post(`${API_URL}/users`, userData);
};

const updateUser = (userId, userData) => {
  return axios.put(`${API_URL}/users/${userId}`, userData);
};

const deleteUser = (userId) => {
  return axios.delete(`${API_URL}/users/${userId}`);
};

export { fetchUsers, addUser, updateUser, deleteUser };
