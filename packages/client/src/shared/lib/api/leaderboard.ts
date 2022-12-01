import { axiosInstance } from '../axios';
import { AddUserProps, GetLeaderboardProps, GetLeaderboardResponse } from './types/leaderboard';

const LEADERBOARD_URL = 'leaderboard';

const Routes = {
  ADD_USER: LEADERBOARD_URL,
  ALL: `${LEADERBOARD_URL}/${__TEAM_NAME__}`,
};

export const LeaderboardAPI = {
  addUser: (payload: AddUserProps) =>
    axiosInstance.post(Routes.ADD_USER, {
      teamName: __TEAM_NAME__,
      ...payload,
    }),
  all: (payload: GetLeaderboardProps) =>
    axiosInstance.post<GetLeaderboardResponse[]>(Routes.ALL, payload),
};
