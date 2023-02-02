import { createSlice } from '@reduxjs/toolkit';
import { sounds } from '@/shared/assets';
import { tamagotchiModel } from '@/entities/tamagotchi';

export const emptyUserState = {
  isBackgroundMusicPlaying: false,
  backgroundMusic: new Audio(sounds.BackgroundMusic),
  actionSound: new Audio(sounds.ActionSound),
};

export const soundsModel = createSlice({
  initialState: emptyUserState,
  name: '@@SOUNDS',
  reducers: {
    playActionSound(state) {
      state.actionSound.play();
    },
    playBackgroundMusic(state) {
      state.isBackgroundMusicPlaying = true;
      state.backgroundMusic.volume = 0.05;
      state.backgroundMusic.play();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(tamagotchiModel.actions.addPoints, (state) => {
      state.actionSound.volume = 0.2;
      state.actionSound.play();
    });
  },
});

export const { playActionSound, playBackgroundMusic } = soundsModel.actions;
