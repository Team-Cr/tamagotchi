import CatBowl from '@/shared/assets/images/MainIcons/CatBowl.png';
import CatFace from '@/shared/assets/images/MainIcons/CatFace.png';
import CatPawWithFish from '@/shared/assets/images/MainIcons/CatPawWithFish.png';
import PixelBed from '@/shared/assets/images/MainIcons/PixelBed.png';
import PixelDumbell from '@/shared/assets/images/MainIcons/PixelDumbell.png';
import { Cat, CatConditions } from '@/shared/lib/game/cat';

export interface ActionConfig {
  image: string;
  text: string;
  pointsForAction: BarsPointsType;
  keyboardKey: string;
  action: () => void | undefined;
}

type GetActionsConfigType = (catRef: Cat | null) => ActionConfig[];

export const GetActionsConfig: GetActionsConfigType = (catRef: Cat | null) => {
  return [
    {
      image: CatBowl,
      text: 'FEED',
      pointsForAction: { level: 10, hp: 10 },
      keyboardKey: 'q',
      action: () => {
        catRef?.setDefaultConditions(CatConditions.Pending);
        catRef?.setConditions(CatConditions.Eat, false);
      },
    },
    {
      image: CatFace,
      text: 'PLAY',
      pointsForAction: { level: 10, hp: 10 },
      keyboardKey: 'w',
      action: () => {
        catRef?.setDefaultConditions(CatConditions.Pending);
        catRef?.setConditions(CatConditions.Play, false);
      },
    },
    {
      image: PixelBed,
      text: 'SLEEP',
      pointsForAction: { level: 5, hp: 20 },
      keyboardKey: 'e',
      action: () => {
        catRef?.setDefaultConditions(CatConditions.Sleep);
        catRef?.setConditions([CatConditions.Spin, CatConditions.Sleep], false);
      },
    },
    {
      image: PixelDumbell,
      text: 'SPORT',
      pointsForAction: { level: 15, hp: 10 },
      keyboardKey: 'r',
      action: () => {
        catRef?.setDefaultConditions(CatConditions.Pending);
        catRef?.setConditions(CatConditions.Sport, true);
      },
    },
    {
      image: CatPawWithFish,
      text: 'ATTACK',
      pointsForAction: { level: 10, hp: -5 },
      keyboardKey: 'f',
      action: () => {
        catRef?.setDefaultConditions(CatConditions.Pending);
        catRef?.setConditions(CatConditions.Attack, false);
      },
    },
  ];
};
