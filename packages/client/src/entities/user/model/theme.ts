import {
  createSlice,
} from '@reduxjs/toolkit';
import { ThemeThunk } from '@/entities/user';

export const emptyThemeState = {
  id: 0,
  name:'dark'
}

export const themeModel = createSlice({
  initialState: emptyThemeState,
  name: '@@THEME',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ThemeThunk.updateTheme.fulfilled, () => {
        alert('Password is changed');
      })
  }
})
