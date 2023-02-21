import type { RequestHandler } from 'express';

import axios, { AxiosError } from 'axios';

type YandexUserType = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string | null;
  login: string;
  avatar: null;
  email: string;
  phone: string;
};

const __BASE_URL__ = process.env.BASE_URL;

export const axiosInstance = axios.create({
  baseURL: __BASE_URL__,
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
});

export const checkAuthMiddleware: RequestHandler = async (req, res, next) => {
  axiosInstance
    .get<YandexUserType>(`${__BASE_URL__}/auth/user`, {
      headers: {
        Cookie: req.headers.cookie,
      },
    })
    .then(() => {
      next();
    })
    .catch((e: AxiosError) => {
      res
        .status(e.status ?? 401)
        .set({ 'Content-Type': 'text/html' })
        .json({
          // @ts-ignore
          error: e.response?.data?.reason ?? e.message,
        });
    });
};
