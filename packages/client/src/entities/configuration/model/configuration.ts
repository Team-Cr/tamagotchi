import { Configuration, THEME } from '@/shared/lib/api';
import { createSlice } from '@reduxjs/toolkit';
import { ConfigurationThunk } from '@/entities/configuration';

export const initialConfig: Configuration = {
  id: 0,
  themeId: THEME.LIGHT,
};

export const configurationModel = createSlice({
  initialState: initialConfig,
  name: '@@CONFIGURATION',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ConfigurationThunk.getConfiguration.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(ConfigurationThunk.updateConfiguration.fulfilled, (state, { payload }) => {
        return payload;
      });
  },
});
