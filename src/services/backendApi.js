import axios from 'axios';
import { Navigate } from 'react-router-dom';
const base = process.env.REACT_APP_API_URL;
const api = axios.create({
  baseURL: base,
});
api.interceptors.request.use(
  function (config) {
    const token = window.localStorage.getItem('admin');
    config.headers.common['Authorization'] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error?.response?.status === 401) {
      localStorage.removeItem('admin');
      localStorage.removeItem('admin_id');
      Navigate('/login');
    }
    if (error?.response && error?.response?.data) {
      return Promise.reject(error?.response?.data);
    }
    return Promise.reject(error?.message);
  }
);
export default api;
