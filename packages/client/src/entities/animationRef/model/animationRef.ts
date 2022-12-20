import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cat } from '@/shared/lib/game/cat';

type AnimationRefModelType = {
  ref: Cat | null
};

export const AnimationRefInitial: AnimationRefModelType = {
  ref: null,
};

export const animationRefModel = createSlice({
  initialState: AnimationRefInitial,
  name: '@@ANIMATION_REF',
  reducers: {
    setRef: (state, action: PayloadAction<Cat>) => {
      state.ref = action.payload;
    },
  },
});

export const { setRef } = animationRefModel.actions;
