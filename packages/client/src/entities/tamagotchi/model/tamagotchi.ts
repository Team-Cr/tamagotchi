import { CharacterData } from '@/shared/lib/api/types/character';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Tamagotchi = {
  level: number;
  hpCurrent: number;
  hpMax: number;
  expCurrent: number;
  expMax: number;
};

export const initialState: Tamagotchi = {
  level: 1,
  hpCurrent: 100,
  hpMax: 100,
  expCurrent: 0,
  expMax: 100,
};

export const tamagotchiModel = createSlice({
  initialState,
  name: '@@TAMAGOTCHI',
  reducers: {
    setData: (state, { payload }: PayloadAction<CharacterData>) => {
      const { expMax } = state;
      const level = getLevel();
      state.hpCurrent = payload.hp;
      state.expCurrent = getExpCurrent();
      state.level = level;

      function getLevel() {
        return Math.floor(payload.experience / expMax) + 1;
      }

      function getExpCurrent() {
        return payload.experience - (getLevel() - 1) * expMax;
      }
    },
    addPoints: (state, { payload: { hp, level } }: PayloadAction<BarsPointsType>) => {
      const { hpCurrent, hpMax, expCurrent, expMax } = state;

      const hpSum = hpCurrent + hp;
      state.hpCurrent = hpSum > hpMax ? hpMax : hpCurrent + hp < 0 ? 0 : hpSum;

      const expSum = expCurrent + level;
      state.expCurrent = expSum >= expMax ? expSum - expMax : expSum;

      if (expSum >= expMax) {
        state.level += 1;
        // state.hpCurrent = state.hpMax = Math.floor(hpMax * 1.1);
        // state.expMax = Math.floor(expMax * 1.5);
        state.expCurrent = 0;
      }
    },
    addLeaderboardLevel: (
      state,
      { payload: { level } }: PayloadAction<Partial<BarsPointsType>>,
    ) => {
      state.level = level ?? 1;
    },
  },
});

export const { addPoints, addLeaderboardLevel, setData } = tamagotchiModel.actions;
