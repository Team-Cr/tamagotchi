import axios from 'axios'

export type ErrorResponse = {
  reason: string
}

export const apiInstance = axios.create({
  baseURL: __BASE_URL__,
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true
})
