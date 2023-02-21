import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/shared/lib/api';
import { UserThunk } from '@/entities/user';
import { AuthThunk } from '@/processes/auth';

export const emptyUserState: User = {
  id: 0,
  first_name: '',
  second_name: '',
  login: '',
  phone: '',
  email: '',
  avatar: '',
};

export const userModel = createSlice({
  initialState: emptyUserState,
  name: '@@USER',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserThunk.updateBasicData.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(UserThunk.updateAvatar.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(UserThunk.updatePassword.fulfilled, () => {
        return;
      })
      .addCase(AuthThunk.getUser.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(AuthThunk.signIn.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(AuthThunk.signUp.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(AuthThunk.logout.fulfilled, (state, { payload }) => {
        return payload;
      });
  },
});
