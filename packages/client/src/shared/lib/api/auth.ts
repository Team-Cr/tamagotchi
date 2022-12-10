import { axiosInstance } from '../axios';
import { SigninData, SignUpData } from './types/auth';
import { User } from './types/profile';
import { AxiosResponse } from '@/shared/lib/api/types/axios';

const AUTH_URL = 'auth';

const Routes = {
  SIGN_IN: `${AUTH_URL}/signin`,
  SIGN_UP: `${AUTH_URL}/signup`,
  LOGOUT: `${AUTH_URL}/logout`,
  GET_USER: `${AUTH_URL}/user`,
};

const headers = {
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
};

export const AuthAPI = {
  signIn: (data: SigninData): AxiosResponse =>
    axiosInstance.post(Routes.SIGN_IN, data, {
      headers,
    }),
  signUp: (data: SignUpData) =>
    axiosInstance.post(Routes.SIGN_UP, data, {
      headers,
    }),
  logout: (): AxiosResponse => axiosInstance.post(Routes.LOGOUT),
  getUser: (): AxiosResponse<User> => axiosInstance.get(Routes.GET_USER),
};
