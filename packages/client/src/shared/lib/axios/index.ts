import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `${__API_URL__}/ya`,
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
});

export const axiosAppInstance = axios.create({
  baseURL: __API_URL__,
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
});
