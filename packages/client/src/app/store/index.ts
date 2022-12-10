import { configureStore } from '@reduxjs/toolkit';
import { userModel } from '@/entities/user/model/user';

export const store = configureStore({
  reducer: {
    user: userModel.reducer,
  }
})
