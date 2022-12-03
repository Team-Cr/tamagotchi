import type { AxiosPromise } from "axios";
import { User } from '@/shared/api/swagger/models'
import { apiInstance } from '@/shared/api/swagger/api'

const BASE_URL = '/user'

const Routes = {
  UPDATE_DATA: `${BASE_URL}/profile`,
  UPDATE_AVATAR: `${BASE_URL}/profile/avatar`,
  UPDATE_PASSWORD: `${BASE_URL}/password`,
}

export type ProfileUpdate = Omit<User, "id" | "avatar">

export type ProfileAvatarUpdate = {
  avatar: FormData,
}

export type PasswordUpdate = {
  oldPassword: string,
  newPassword: string
}

export const ProfileAPI = {
  updateData: (payload: ProfileUpdate): AxiosPromise<User> =>
    apiInstance.put(Routes.UPDATE_DATA, payload),
  updateAvatar: (payload: FormData): AxiosPromise<User> =>
    apiInstance.put(Routes.UPDATE_AVATAR, payload, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }),
  updatePassword: (payload: PasswordUpdate): AxiosPromise =>
    apiInstance.put(Routes.UPDATE_PASSWORD, payload)
}
