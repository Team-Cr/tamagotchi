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
  barsPoints: BarsPointsType;
  setBarsPoints: Dispatch<SetStateAction<BarsPointsType>>;
  setCurrentLevel: Dispatch<SetStateAction<number>>;
};

export type handleUpdateBarsPointsType = ({ level, hp }: BarsPointsType) => void;

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

  const ActionsConfig: {
    image: string;
    text: string;
    pointsForAction: BarsPointsType;
    keyboardKey: string;
  }[] = [
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
  return (
    <div className='main__container'>
      <img className='main__container__image' src={CatPicture} alt='Cat' />
      <div className='main__container__actions'>
        {ActionsConfig.map((item) => (
          <ActionBlock
            image={item.image}
            text={item.text}
            key={item.text}
            handleUpdateBarsPoints={handleUpdateBarsPoints}
            pointsForAction={item.pointsForAction}
            keyboardKey={item.keyboardKey}
          />
        ))}
      </div>
    </div>
  );
};
