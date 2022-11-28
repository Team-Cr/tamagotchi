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

  const handleUpdateBarsPoints: handleUpdateBarsPointsType = ({ level, hp }) => {
    const levelForUpdate =
      barsPoints.level + level > 100 ? barsPoints.level + level - 100 : barsPoints.level + level;
    const hpForUpdate =
      barsPoints.hp + hp > 100 ? 100 : barsPoints.hp + hp < 0 ? 0 : barsPoints.hp + hp;
    if (barsPoints.level + level > 100) {
      setCurrentLevel((prev: number) => prev + 1);
    }
    setBarsPoints(() => ({
      level: levelForUpdate,
      hp: hpForUpdate,
    }));
  };

  return (
    <div className='main__container'>
      <img className='main__container__image' src={CatPicture} alt='Cat' />
      <div className='main__container__actions'>
        <ActionBlock
          image={CatBowl}
          text='FEED'
          handleUpdateBarsPoints={handleUpdateBarsPoints}
          pointsForAction={{ level: 10, hp: 10 }}
          keyboardKey="q"
        />
        <ActionBlock
          image={CatFace}
          text='PLAY'
          handleUpdateBarsPoints={handleUpdateBarsPoints}
          pointsForAction={{ level: 10, hp: 10 }}
          keyboardKey="w"
        />
        <ActionBlock
          image={PixelBed}
          text='SLEEP'
          handleUpdateBarsPoints={handleUpdateBarsPoints}
          pointsForAction={{ level: 5, hp: 20 }}
          keyboardKey="e"
        />
        <ActionBlock
          image={PixelDumbell}
          text='SPORT'
          handleUpdateBarsPoints={handleUpdateBarsPoints}
          pointsForAction={{ level: 15, hp: 10 }}
          keyboardKey="r"
        />
        <ActionBlock
          image={CatPawWithFish}
          text='ATTACK'
          handleUpdateBarsPoints={handleUpdateBarsPoints}
          pointsForAction={{ level: 10, hp: -5 }}
          keyboardKey="f"
        />
      </div>
    </div>
  );
};
