import { HTTP } from '@/shared/utils/httpClient/HttpClient';
import { BASE_URL } from './api';

export const httpClient = new HTTP(BASE_URL);
