import * as React from 'react';
import { authApi, RegData } from '@/shared/api/AuthApi';
import { convertingDataToSend } from '../lib/convertingDataToSend';

export type RegFormType = {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  login: string;
  password: string;
};

export const useAuth = () => {
  const registerUser = React.useCallback((data: RegFormType) => {
    const formattedData = convertingDataToSend(data) as RegData;

    return authApi.signUp(formattedData);
  }, []);

  return { registerUser };
};
