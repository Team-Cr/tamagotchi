import axios from 'axios'

export type ErrorResponse = {
  reason: string
}

// TODO replace with .env variable
const BASE_URL = 'https://ya-praktikum.tech/api/v2';

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true
})
