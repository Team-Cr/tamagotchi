import { KeyboardEvent } from 'react';

import { handleUpdateBarsPointsType } from '@/widgets/MainContainer/ui/MainContainer';

import './ActionBlock.scss';

type ActionBlockType = {
  image: string;
  text: string;
  pointsForAction: { level: number; hp: number };
  handleUpdateBarsPoints: handleUpdateBarsPointsType;
  keyboardKey: string;
};


export const ActionBlock = (props: ActionBlockType) => {
  const { handleUpdateBarsPoints, image, pointsForAction, text, keyboardKey } = props;

  const handleKeyboardClick = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === keyboardKey) {
      handleUpdateBarsPoints(pointsForAction);
    }
  };
  
  return (
    <div
      className='action-block'
      onKeyDown={handleKeyboardClick}
      tabIndex={0}
      role='button'
      onClick={() => handleUpdateBarsPoints(pointsForAction)}
    >
      <img className='action-block__image' src={image} alt={`Icon-${text}`} />
      <p className='action-block__text'>{text}</p>
    </div>
  );
};
