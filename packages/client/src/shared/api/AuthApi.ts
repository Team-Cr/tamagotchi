import { api } from './api';
import { httpClient } from './httpClient';

export type LoginData = {
  login: 'string';
  password: 'string';
};

export type RegData = {
  first_name: 'string';
  second_name: 'string';
  login: 'string';
  email: 'string';
  password: 'string';
  phone: 'string';
};

class AuthApi {
  public async signIn(data: LoginData) {
    return httpClient.post(`${api.auth.domain}${api.auth.auth}`, {
      data,
    });
  }

  public async signUp(data: RegData) {
    return httpClient.post(`${api.auth.domain}${api.auth.reg}`, {
      data,
    });
  }

  public async signOut() {
    return httpClient.post(`${api.auth.domain}${api.auth.logout}`);
  }

  public async checkAuth() {
    return httpClient.get(`${api.auth.domain}${api.auth.getProfile}`).then((response) => {
      if (response.status === 401) {
        return false;
      } else {
        return true;
      }
    });
  }
}

export const authApi = new AuthApi();
