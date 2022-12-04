import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: __BASE_URL__,
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
});
