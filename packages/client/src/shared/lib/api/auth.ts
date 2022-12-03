import { axiosInstance } from '../axios';
import { SigninData } from './types/auth';
import { User } from './types/profile';

const AUTH_URL = 'auth';

const Routes = {
  SIGN_IN: `${AUTH_URL}/signin`,
  GET_USER: `${AUTH_URL}/user`,
};

export const AuthAPI = {
  signIn: (data: SigninData) =>
    axiosInstance.post<string>(Routes.SIGN_IN, data, {
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    }),
  getUser: () => axiosInstance.get<User>(Routes.GET_USER),
};
