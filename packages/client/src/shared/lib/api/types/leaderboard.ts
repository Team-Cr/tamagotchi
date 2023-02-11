export interface LeaderboardData {
  id: number;
  avatarUrl: string;
  name: string;
  daysActive: number;
  level: number;
}

export interface AddUserProps {
  data: LeaderboardData;
  ratingFieldName: keyof LeaderboardData;
}

export interface GetLeaderboardProps {
  ratingFieldName: keyof LeaderboardData;
  cursor: number;
  limit: number;
}

export interface GetLeaderboardResponse {
  data: LeaderboardData;
}
