import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Tamagotchi = {
  level: number,
  hpCurrent: number,
  hpMax: number,
  expCurrent: number,
  expMax: number
}

const initialState: Tamagotchi = {
  level: 1,
  hpCurrent: 100,
  hpMax: 100,
  expCurrent: 0,
  expMax: 100
}
export const tamagotchiModel = createSlice({
  initialState,
  name: '@@TAMAGOTCHI',
  reducers: {
    addPoints: (state, { payload: { hp, level } }: PayloadAction<BarsPointsType>) => {
      const {hpCurrent, hpMax, expCurrent, expMax} = state;

      const hpSum = hpCurrent + hp;
      state.hpCurrent = hpSum > hpMax ? hpMax : ( hpCurrent + hp < 0 ? 0 : hpSum );

      const expSum = expCurrent + level;
      state.expCurrent = expSum >= expMax ? ( expSum - expMax ) : expSum;

      if (expSum >= expMax) {
        state.level += 1;
        state.hpMax = Math.round(hpMax * 1.1);
        state.expMax = Math.round(expMax * 1.5);
        state.expCurrent = 0
      }
    }
  }
});

export const {addPoints} = tamagotchiModel.actions;
