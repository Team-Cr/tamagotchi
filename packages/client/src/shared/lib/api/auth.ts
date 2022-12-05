import { axiosInstance } from '../axios';
import { SigninData } from './types/auth';
import { User } from './types/profile';
import { AxiosResponse } from '@/shared/lib/api/types/axios';

const AUTH_URL = 'auth';

const Routes = {
  SIGN_IN: `${AUTH_URL}/signin`,
  LOGOUT: `${AUTH_URL}/logout`,
  GET_USER: `${AUTH_URL}/user`,
};

export const AuthAPI = {
  signIn: (data: SigninData): AxiosResponse =>
    axiosInstance.post(Routes.SIGN_IN, data, {
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    }),
  logout: (): AxiosResponse => axiosInstance.post(Routes.LOGOUT),
  getUser: (): AxiosResponse<User> => axiosInstance.get(Routes.GET_USER),
};
