import axios from 'axios';
import store from '../store/store';

const api = axios.create({
  baseURL: 'http://34.175.188.52:3001',
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
