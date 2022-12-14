import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { User } from '@/shared/lib/api';
import { UserThunk } from '@/entities/user/api';
import { AuthThunk } from '@/processes/auth/api';

export const emptyUserState: User = {
  id: 0,
  first_name: '',
  second_name: '',
  login: '',
  phone: '',
  email: '',
  avatar: '',
}

export const userModel = createSlice({
  initialState: emptyUserState,
  name: '@@USER',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserThunk.updateBasicData.fulfilled, (state, {payload}) => {
        return payload;
      })
      .addCase(UserThunk.updateAvatar.fulfilled, (state, {payload}) => {
        return payload;
      })
      .addCase(UserThunk.updatePassword.fulfilled, () => {
        alert('Password is changed');
      })
      .addCase(AuthThunk.getUser.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(AuthThunk.signIn.fulfilled, (state, { payload }) => {
        alert('login success');
        return payload;
      })
      .addCase(AuthThunk.signUp.fulfilled, (state, { payload }) => {
        alert('register success');
        return payload;
      })
      .addCase(AuthThunk.logout.fulfilled, (state, { payload }) => {
        alert('logout');
        return payload;
      })
  }
})
