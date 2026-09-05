import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setToken = token => {
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const unsetToken = () => {
  apiClient.defaults.headers.common.Authorization = '';
};