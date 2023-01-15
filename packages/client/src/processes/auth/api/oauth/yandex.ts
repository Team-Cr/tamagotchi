import { ROUTES } from '@/shared/constants/routes';
import { axiosInstance } from '@/shared/lib/axios';
import { AxiosResponse } from '@/shared/lib/api/types/axios';
import { redirect } from 'react-router-dom';

const BASE_URL = '/oauth/yandex';
const BASE_REDIRECT = `${__APP_URL__}/login`;

const Routes = {
  GET_SERVICE_ID: `${BASE_URL}/service-id`,
  AUTH: BASE_URL,
}

type ServiceIdResponse = {
  service_id: string
}

export const YandexOAuth = {
  getServiceId: (redirect_uri: string = BASE_REDIRECT): AxiosResponse<ServiceIdResponse> =>
    axiosInstance.get(Routes.GET_SERVICE_ID, {
      params: {
        redirect_uri,
      },
    }),
  getOAuthLink: (client_id: string, redirect_uri: string = BASE_REDIRECT) : string => {
    const query = {
      response_type: 'code',
      client_id,
      redirect_uri
    }

    const uri = 'https://oauth.yandex.ru/authorize?' + new URLSearchParams(query);

    console.log(query, uri);

    return 'https://oauth.yandex.ru/authorize?' + new URLSearchParams(query);
  },
  auth: (code: string, redirect_uri: string = BASE_REDIRECT): AxiosResponse =>
    axiosInstance.post(Routes.AUTH, {
      code,
      redirect_uri,
    }),
}
