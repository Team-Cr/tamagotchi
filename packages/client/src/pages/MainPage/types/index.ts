export interface BarsPointsType {
  level: number;
  hp: number;
}

export type HandleUpdateBarsPointsType = ({ level, hp }: BarsPointsType) => void;
