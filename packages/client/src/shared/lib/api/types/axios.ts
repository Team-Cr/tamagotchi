import { AxiosPromise } from 'axios'

export interface ErrorResponse {
  reason: string;
}

export type AxiosResponse<T = 'OK'> = AxiosPromise<T>
