import type { AxiosPromise } from "axios";
import { User } from '@/shared/api/typicode/models'
import { apiInstance, ErrorResponse } from '@/shared/api/typicode/api'

const BASE_URL = '/user'

export type ProfileUpdate = Omit<User, "id" | "avatar">

export type ProfileAvatarUpdate = {
  avatar: FormData,
}

export type PasswordUpdate = {
  oldPassword: string,
  newPassword: string
}


export const ProfileUpdate = (data: ProfileUpdate): AxiosPromise<User | ErrorResponse> => {
  const URL = `${BASE_URL}/profile`;

  return apiInstance.put(URL, { data })
}

export const AvatarUpdate = (data: ProfileAvatarUpdate): AxiosPromise<User | ErrorResponse> => {
  const URL = `${BASE_URL}/profile/avatar`;

  return apiInstance.put(URL, { data })
}

export const PasswordUpdate = (data: PasswordUpdate): AxiosPromise<ErrorResponse> => {
  const URL = `${BASE_URL}/password`;

  return apiInstance.put(URL, { data })
}
