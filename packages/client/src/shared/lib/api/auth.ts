import { axiosInstance } from '../axios';
import { SigninData } from './types/auth';

const AUTH_URL = 'auth';

const Routes = {
  SIGN_IN: `${AUTH_URL}/signin`,
};

export const AuthAPI = {
  signIn: (data: SigninData) =>
    axiosInstance
      .post(Routes.SIGN_IN, data, {
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: '0',
        },
      })
      .then(function (response) {
        return response; // здесь должен быть переход на страницу профиля или главную
      })
      .catch(function (error) {
        console.warn(error);
      }),
};
