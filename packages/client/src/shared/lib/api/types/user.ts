export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
  display_name?: string;
  avatar?: string;

  configuration?: UserConfiguration;
}

export interface UserConfiguration {
  id: number;
  themeId: THEME;
}
export enum THEME {
  LIGHT = 1,
  DARK = 2,
}

export type UserBasicData = Omit<User, 'id' | 'avatar'>;

export interface UserPasswordUpdate {
  oldPassword: string;
  newPassword: string;
}

export interface UserConfigurationUpdate {
  themeId?: number;
}
