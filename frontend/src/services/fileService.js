import axios from 'axios';

const API_URL = 'http://localhost:5000/api/files';

export const getFiles = () => axios.get(API_URL);
export const getFile = (id) => axios.get(`${API_URL}/${id}`);
export const createFile = (file) => axios.post(API_URL, file);
export const updateFile = (id, file) => axios.put(`${API_URL}/${id}`, file);
export const deleteFile = (id) => axios.delete(`${API_URL}/${id}`);
