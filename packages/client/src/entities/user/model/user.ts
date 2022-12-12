import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { AuthAPI, ProfileAPI, User } from '@/shared/lib/api';
import { UserBasicData, UserPasswordUpdate } from '@/shared/lib/api/types/profile';

const initialState: User = {
  id: 0,
  first_name: '',
  second_name: '',
  login: '',
  phone: '',
  email: '',
}

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await AuthAPI.getUser();
  return response.data;
})

export const updateUserData = createAsyncThunk('user/update', async (payload: UserBasicData) => {
  const response = await ProfileAPI.updateData(payload);
  return response.data;
})

export const updateUserAvatar = createAsyncThunk('user/update_avatar', async (payload: FormData) => {
  const response = await ProfileAPI.updateAvatar(payload);
  return response.data;
})

export const updateUserPassword = createAsyncThunk('user/update_password', async (payload: UserPasswordUpdate) => {
  const response = await ProfileAPI.updatePassword(payload);
  return response.data;
})

export const userModel = createSlice({
  initialState,
  name: '@@USER',
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(updateUserData.fulfilled, (state, {payload}) => {
        return payload;
      })
      .addCase(updateUserAvatar.fulfilled, (state, {payload}) => {
        return payload;
      })
      .addCase(updateUserPassword.fulfilled, () => {
        alert('Password is changed');
      })
  }
})
