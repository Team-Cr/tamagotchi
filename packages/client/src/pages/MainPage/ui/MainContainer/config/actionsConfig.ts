import CatBowl from '@/shared/assets/images/MainIcons/CatBowl.png';
import CatFace from '@/shared/assets/images/MainIcons/CatFace.png';
import CatPawWithFish from '@/shared/assets/images/MainIcons/CatPawWithFish.png';
import PixelBed from '@/shared/assets/images/MainIcons/PixelBed.png';
import PixelDumbell from '@/shared/assets/images/MainIcons/PixelDumbell.png';
import { BarsPointsType } from '../../../types';

export interface ActionConfig {
  image: string;
  text: string;
  pointsForAction: BarsPointsType;
  keyboardKey: string;
}

export const ActionsConfig: ActionConfig[] = [
  {
    image: CatBowl,
    text: 'FEED',
    pointsForAction: { level: 10, hp: 10 },
    keyboardKey: 'q',
  },
  {
    image: CatFace,
    text: 'PLAY',
    pointsForAction: { level: 10, hp: 10 },
    keyboardKey: 'w',
  },
  {
    image: PixelBed,
    text: 'SLEEP',
    pointsForAction: { level: 5, hp: 20 },
    keyboardKey: 'e',
  },
  {
    image: PixelDumbell,
    text: 'SPORT',
    pointsForAction: { level: 15, hp: 10 },
    keyboardKey: 'r',
  },
  {
    image: CatPawWithFish,
    text: 'ATTACK',
    pointsForAction: { level: 10, hp: -5 },
    keyboardKey: 'f',
  },
];
