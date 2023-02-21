import { ROUTES } from '@/shared/constants/routes';
import { axiosInstance } from '@/shared/lib/axios';
import { AxiosResponse } from '@/shared/lib/api/types/axios';

const BASE_URL = '/oauth/yandex';
const BASE_REDIRECT = `${__APP_URL__}${ROUTES.OAuth}`;

const Routes = {
  GET_SERVICE_ID: `${BASE_URL}/service-id`,
  AUTH: BASE_URL,
};

type ServiceIdResponse = {
  service_id: string;
};

export type YandexOAuthResponse = {
  code: string;
};

export const YandexOAuth = {
  getServiceId: (redirect_uri: string = BASE_REDIRECT): AxiosResponse<ServiceIdResponse> =>
    axiosInstance.get(Routes.GET_SERVICE_ID, {
      params: {
        redirect_uri,
      },
    }),
  getOAuthLink: (client_id: string, redirect_uri: string = BASE_REDIRECT): string => {
    const url = new URL('https://oauth.yandex.ru/authorize');

    const query: Record<string, string> = {
      response_type: 'code',
      client_id,
      redirect_uri,
    };

    Object.keys(query).forEach((key) => {
      url.searchParams.append(key, query[key]);
    });

    return url.href;
  },
  auth: (code: string, redirect_uri: string = BASE_REDIRECT): AxiosResponse =>
    axiosInstance.post(Routes.AUTH, {
      code,
      redirect_uri,
    }),
};
