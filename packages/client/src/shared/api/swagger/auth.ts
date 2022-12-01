import { apiInstance } from '@/shared/api/swagger/api'
import { AxiosPromise } from 'axios'
import { User } from '@/shared/api/swagger/models'

export interface SigninData {
  login: string;
  password: string;
}

const AUTH_URL = 'auth';

const Routes = {
  SIGN_IN: `${AUTH_URL}/signin`,
  GET_USER: `${AUTH_URL}/user`
};

export const AuthAPI = {
  signIn: (data: SigninData): AxiosPromise<User> =>
    apiInstance
      .post(Routes.SIGN_IN, data, {
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: '0',
        },
      }),
  getUser: (): AxiosPromise<User> =>
    apiInstance.get(Routes.GET_USER)
};
