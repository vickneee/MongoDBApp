import axios from 'axios';

// Base URL for API endpoints
const API_URL = 'http://127.0.0.1:5001/users';

export const getUsers = async () => {
  return await axios.get(API_URL);
};

export const createUser = async (user) => {
  return await axios.post(API_URL, user);
};

export const updateUser = async (id, user) => {
  return await axios.patch(`${API_URL}/${id}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
