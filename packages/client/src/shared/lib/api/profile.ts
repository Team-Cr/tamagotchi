import { axiosInstance } from '../axios';
import { PasswordUpdate, User, UserRequest } from './types/profile';
import { AxiosResponse } from '@/shared/lib/api/types/axios'

const USER_URL = 'user';
const PROFILE_URL = `${USER_URL}/profile`;

const Routes = {
  UPDATE_DATA: `${PROFILE_URL}`,
  UPDATE_AVATAR: `${PROFILE_URL}/avatar`,
  UPDATE_PASSWORD: `${USER_URL}/password`,
};

export const ProfileAPI = {
  updateData: (payload: UserRequest): AxiosResponse<User> =>
    axiosInstance.put(Routes.UPDATE_DATA, payload),
  updateAvatar: (payload: FormData): AxiosResponse<User> =>
    axiosInstance.put(Routes.UPDATE_AVATAR, payload, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }),
  updatePassword: (payload: PasswordUpdate): AxiosResponse =>
    axiosInstance.put(Routes.UPDATE_PASSWORD, payload),
};
