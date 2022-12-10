import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { AuthAPI, User } from '@/shared/lib/api';
import { UserBasicData } from '@/shared/lib/api/types/profile';

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

export const userModel = createSlice({
  initialState,
  name: '@@USER',
  reducers: {
    updateAvatar: (state, { payload: userAvatar }: PayloadAction<string>) => {
      state.avatar = userAvatar;
    },
    updateBasicData: (state, { payload: userBasicData }: PayloadAction<UserBasicData>) => {
      state = { ...state, ...userBasicData };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        return payload;
      })
  }
})

export const {updateBasicData, updateAvatar} = userModel.actions;
