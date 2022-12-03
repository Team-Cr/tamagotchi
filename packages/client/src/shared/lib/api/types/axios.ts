export interface ErrorResponse {
  reason: string;
}

export type SuccessResponse<T> = string | T;

export type AxiosResponse<T> = ErrorResponse | SuccessResponse<T>;
