import { AxiosResponse } from '@/shared/lib/api/types/axios';
import { SigninData, User } from '@/shared/lib/api';
import { axiosInstance } from '@/shared/lib/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserBasicData } from '@/shared/lib/api/types/user';
import { emptyUserState, userModel } from '@/entities/user/model';
import { SignUpData } from '@/shared/lib/api/types/auth';

const AUTH_URL = 'auth';

const Routes = {
  SIGN_IN: `${AUTH_URL}/signin`,
  SIGN_UP: `${AUTH_URL}/signup`,
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
  signUp: (data: SignUpData): AxiosResponse =>
    axiosInstance.post(Routes.SIGN_UP, data),
  logout: (): AxiosResponse => axiosInstance.post(Routes.LOGOUT),
  getUser: (): AxiosResponse<User> => axiosInstance.get(Routes.GET_USER)
};


export const AuthThunk = {
  signIn: createAsyncThunk('auth/sign_in', async (payload: SigninData) => {
    await AuthAPI.signIn(payload);
    const response = await AuthAPI.getUser();
    return response.data;
  }),
  signUp: createAsyncThunk('auth/sign_up', async (payload: SignUpData) => {
    await AuthAPI.signUp(payload);
    const response = await AuthAPI.getUser();
    return response.data;
  }),
  logout: createAsyncThunk('user/logout', async () => {
    await AuthAPI.logout();
    return emptyUserState;
  }),
  getUser: createAsyncThunk('auth/get_user', async () => {
    const response = await AuthAPI.getUser();
    return response.data;
  }),

}
