import { emptyUserState } from '@/entities/user/model';
import { YandexOAuthResponse } from '@/processes/auth';
import { SigninData, User } from '@/shared/lib/api';
import { SignUpData } from '@/shared/lib/api/types/auth';
import { AxiosResponse } from '@/shared/lib/api/types/axios';
import { axiosAppInstance, axiosInstance } from '@/shared/lib/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const AUTH_URL = 'auth';

const Routes = {
  SIGN_IN: `${AUTH_URL}/signin`,
  SIGN_UP: `${AUTH_URL}/signup`,
  LOGOUT: `${AUTH_URL}/logout`,
  GET_USER: `${AUTH_URL}/user`,
};

// combine OAuth responses
// example:  OAuthResponse = YandexOAuthResponse | GoogleOAuthResponse | etc.
export type OAuthResponse = YandexOAuthResponse;

export const AuthAPI = {
  signIn: (data: SigninData): AxiosResponse =>
    axiosInstance.post(Routes.SIGN_IN, data, {
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    }),
  signUp: (data: SignUpData): AxiosResponse => axiosInstance.post(Routes.SIGN_UP, data),
  logout: (): AxiosResponse => axiosInstance.post(Routes.LOGOUT),
  getUser: (): AxiosResponse<User> => axiosInstance.get(Routes.GET_USER),
  storeUser: (id: User['id']): AxiosResponse<User['id']> => axiosAppInstance.post(`/user/${id}`),
};

export const AuthThunk = {
  signIn: createAsyncThunk('auth/sign_in', async (payload: SigninData) => {
    await AuthAPI.signIn(payload);
    const { data } = await AuthAPI.getUser();
    return data;
  }),
  signUp: createAsyncThunk('auth/sign_up', async (payload: SignUpData) => {
    await AuthAPI.signUp(payload);
    const { data } = await AuthAPI.getUser();
    return data;
  }),
  logout: createAsyncThunk('user/logout', async () => {
    await AuthAPI.logout();
    return emptyUserState;
  }),
  getUser: createAsyncThunk('auth/get_user', async () => {
    const { data } = await AuthAPI.getUser();
    await AuthAPI.storeUser(data.id);
    return data;
  }),
};
