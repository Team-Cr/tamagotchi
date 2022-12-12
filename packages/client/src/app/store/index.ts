import { configureStore } from '@reduxjs/toolkit';
import { userModel } from '@/entities/user/model/user';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    user: userModel.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
