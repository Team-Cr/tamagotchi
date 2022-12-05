import { axiosInstance } from '../axios';
import { SigninData, SignUpData } from './types/auth';

const AUTH_URL = 'auth';

const Routes = {
  SIGN_IN: `${AUTH_URL}/signin`,
  SIGN_UP: `${AUTH_URL}/signup`,
};

const headers = {
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
};

export const AuthAPI = {
  signIn: (data: SigninData) =>
    axiosInstance
      .post(Routes.SIGN_IN, data, {
        headers,
      })
      .then(function (response) {
        return response; // здесь должен быть переход на страницу профиля или главную
      })
      .catch(function (error) {
        console.warn(error);
      }),
  signUp: (data: SignUpData) =>
    axiosInstance.post(Routes.SIGN_UP, data, {
      headers,
    }),
};
