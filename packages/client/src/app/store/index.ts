import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import { userModel } from '@/entities/user/model';
import { tamagotchiModel } from '@/entities/tamagotchi/model';

export const store = configureStore({
  reducer: {
    user: userModel.reducer,
    tamagotchi: tamagotchiModel.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
