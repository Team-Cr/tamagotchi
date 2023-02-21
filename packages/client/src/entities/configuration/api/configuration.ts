import { AxiosResponse } from '@/shared/lib/api/types/axios';
import { axiosAppInstance } from '@/shared/lib/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Configuration } from '@/shared/lib/api/types/configuration';

const Routes = {
  UPDATE_CONFIGURATION: `configuration/`,
  GET_CONFIGURATION: `configuration/`,
};

export const ConfigurationAPI = {
  updateConfiguration: (payload: Configuration): AxiosResponse<Configuration> => {
    const { id, ...data } = payload;
    return axiosAppInstance.patch(Routes.UPDATE_CONFIGURATION + id, data);
  },
  getConfiguration: (payload: Configuration['id']): AxiosResponse<Configuration> => {
    return axiosAppInstance.get(Routes.GET_CONFIGURATION + payload);
  },
};

export const ConfigurationThunk = {
  updateConfiguration: createAsyncThunk('configuration/update', async (payload: Configuration) => {
    const response = await ConfigurationAPI.updateConfiguration(payload);
    return response.data;
  }),
  getConfiguration: createAsyncThunk('configuration/get', async (payload: Configuration['id']) => {
    const response = await ConfigurationAPI.getConfiguration(payload);
    return response.data;
  }),
};
