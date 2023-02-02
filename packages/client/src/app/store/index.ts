import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import { emptyUserState, userModel } from '@/entities/user/model';
import { initialState, tamagotchiModel } from '@/entities/tamagotchi/model';

import { animationRefModel } from '@/entities/animationRef';
//import { soundsModel } from '@/entities/sounds';

export const appInitialState = {
  user: emptyUserState,
  tamagotchi: initialState,
};

const preloadedState = typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : undefined;

// @ts-ignore
if (typeof window !== 'undefined') {
  delete window.__PRELOADED_STATE__;
}

export const store = configureStore({
  reducer: {
    user: userModel.reducer,
    tamagotchi: tamagotchiModel.reducer,
    animationRef: animationRefModel.reducer,
    // sounds: soundsModel.reducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) => {
    const middlewares = [];
    if (__MODE__ === 'development') {
      middlewares.push(logger);
    }
    return getDefaultMiddleware({ serializableCheck: false }).concat(middlewares);
  },
});
