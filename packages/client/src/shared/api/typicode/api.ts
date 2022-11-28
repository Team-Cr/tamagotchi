import axios from 'axios'
import { BASE_URL } from '@/shared/config'

export type ErrorResponse = {
  reason: string
}

export const apiInstance = axios.create({
  baseURL: BASE_URL
})
