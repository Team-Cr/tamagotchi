export interface SigninData {
  login: string;
  password: string;
}

const AUTH_URL = '/auth';

export const API_URL = 'https://ya-praktikum.tech/api/v2';

export const signIn = async (data: SigninData) => {
  const endpoint = '/signin';

  fetch(API_URL + AUTH_URL + endpoint, {
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
    method: 'post',
    cache: 'no-cache',
  })
    .then(function (response) {
      if (response.ok) {
        return response; // здесь должен быть переход на страницу профиля или главную
      }
      return response.text().then((text) => {
        throw new Error(JSON.parse(text).reason);
      });
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.warn(error);
    });
};
