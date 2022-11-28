import { Dispatch, SetStateAction } from 'react';
import CatPicture from '@/shared/assets/images/mainCat.png';
import CatBowl from '@/shared/assets/images/MainIcons/CatBowl.png';
import CatFace from '@/shared/assets/images/MainIcons/CatFace.png';
import PixelBed from '@/shared/assets/images/MainIcons/PixelBed.png';
import PixelDumbell from '@/shared/assets/images/MainIcons/PixelDumbell.png';
import CatPawWithFish from '@/shared/assets/images/MainIcons/CatPawWithFish.png';
import { ActionBlock } from '@/widgets';

import './MainContainer.scss';

type MainContainerProps = {
  barsPoints: { level: number; hp: number };
  setBarsPoints: Dispatch<SetStateAction<{ level: number; hp: number }>>;
  setCurrentLevel: Dispatch<SetStateAction<number>>;
};

export type handleUpdateBarsPointsType = ({ level, hp }: { level: number; hp: number }) => void;

export const MainContainer = (props: MainContainerProps) => {
  const { barsPoints, setBarsPoints, setCurrentLevel } = props;
  console.log(barsPoints, setBarsPoints, setCurrentLevel);
  return (
    <div className='main__container'>
      <img className='main__container__image' src={CatPicture} alt='Cat' />
      <div className='main__container__actions'>
        <ActionBlock image={CatBowl} text='FEED' />
        <ActionBlock image={CatFace} text='PLAY' />
        <ActionBlock image={PixelBed} text='SLEEP' />
        <ActionBlock image={PixelDumbell} text='SPORT' />
        <ActionBlock image={CatPawWithFish} text='ATTACK' />
      </div>
    </div>
  );
};
