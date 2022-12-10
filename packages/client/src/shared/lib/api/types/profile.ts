export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  display_name: string;
  phone: string;
  avatar: string;
}

export type UserRequest = Omit<User, 'id' | 'avatar'>;

export interface ProfileAvatarUpdate {
  avatar: FormData;
}

export interface PasswordUpdate {
  oldPassword: string;
  newPassword: string;
}
