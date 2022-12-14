export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
  display_name?: string;
  avatar?: string;
}

export type UserBasicData = Omit<User, 'id' | 'avatar'>;

export interface UserPasswordUpdate {
  oldPassword: string;
  newPassword: string;
}
