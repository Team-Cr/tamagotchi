import { AxiosResponse } from '@/shared/lib/api/types/axios';
import { User, UserBasicData, UserPasswordUpdate } from '@/shared/lib/api/types/user';
import { axiosInstance } from '@/shared/lib/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const USER_URL = 'user';
const PROFILE_URL = `${USER_URL}/profile`;

const Routes = {
  UPDATE_DATA: `${PROFILE_URL}`,
  UPDATE_AVATAR: `${PROFILE_URL}/avatar`,
  UPDATE_PASSWORD: `${USER_URL}/password`,
  GET_USER: `${USER_URL}/`,
};

export const UserAPI = {
  updateBasicData: (payload: UserBasicData): AxiosResponse<User> =>
    axiosInstance.put(Routes.UPDATE_DATA, payload),
  updateAvatar: (payload: FormData): AxiosResponse<User> =>
    axiosInstance.put(Routes.UPDATE_AVATAR, payload, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }),
  updatePassword: (payload: UserPasswordUpdate): AxiosResponse =>
    axiosInstance.put(Routes.UPDATE_PASSWORD, payload),
  getUser: (id: number): AxiosResponse<User> => axiosInstance.get(Routes.GET_USER + id),
};

export const UserThunk = {
  updateBasicData: createAsyncThunk('user/update', async (payload: UserBasicData) => {
    const response = await UserAPI.updateBasicData(payload);
    return response.data;
  }),
  updateAvatar: createAsyncThunk('user/update_avatar', async (payload: FormData) => {
    const response = await UserAPI.updateAvatar(payload);
    return response.data;
  }),
  updatePassword: createAsyncThunk('user/update_password', async (payload: UserPasswordUpdate) => {
    const response = await UserAPI.updatePassword(payload);
    return response.data;
  }),
};
