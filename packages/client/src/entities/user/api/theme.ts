import { AxiosResponse } from '@/shared/lib/api/types/axios';
import { axiosInstance } from '@/shared/lib/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const Routes = {
  UPDATE_THEME: `theme`,
};

export const ThemeAPI = {
  updateTheme: (payload: {id:number,name:string}): AxiosResponse<{id:number,name:string}> =>
    axiosInstance.put(Routes.UPDATE_THEME, payload),
};

export const ThemeThunk = {
  updateTheme: createAsyncThunk('theme', async (payload: {id:number,name:string}) => {
    const response = await ThemeAPI.updateTheme(payload);
    return response.data;
  }),
};
