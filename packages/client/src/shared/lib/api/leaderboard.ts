import { axiosInstance } from '../axios';
import { AddUserProps, GetLeaderboardProps } from './types/leaderboard';

const LEADERBOARD_URL = 'leaderboard';

const Routes = {
  ADD_USER: LEADERBOARD_URL,
  ALL: `${LEADERBOARD_URL}/all`,
};

export const LeaderboardAPI = {
  addUser: (payload: AddUserProps) =>
    axiosInstance.post(Routes.ADD_USER, {
      ...payload,
    }),
  all: (payload: GetLeaderboardProps) => axiosInstance.post(Routes.ALL, payload),
};
