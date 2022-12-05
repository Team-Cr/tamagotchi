import * as React from 'react';
import { convertingDataToSend } from '../lib/convertingDataToSend';
import { AuthAPI, SignUpData } from '../lib/api';

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
    const formattedData = convertingDataToSend(data) as SignUpData;

    return AuthAPI.signUp(formattedData);
  }, []);

  return { registerUser };
};
