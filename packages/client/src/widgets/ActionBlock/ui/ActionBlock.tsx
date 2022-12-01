import { KeyboardEvent, useCallback } from 'react';

import { handleUpdateBarsPointsType } from '@/widgets/MainContainer/ui/MainContainer';

import './ActionBlock.scss';

type ActionBlockType = {
  image: string;
  text: string;
  pointsForAction: BarsPointsType;
  handleUpdateBarsPoints: handleUpdateBarsPointsType;
  keyboardKey: string;
};

export const ActionBlock = (props: ActionBlockType) => {
  const { handleUpdateBarsPoints, image, pointsForAction, text, keyboardKey } = props;

  const handleClick = useCallback(() => handleUpdateBarsPoints(pointsForAction), [handleUpdateBarsPoints, pointsForAction])

  const handleKeyboardClick = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === keyboardKey) {
        handleUpdateBarsPoints(pointsForAction);
      }
    },
    [handleUpdateBarsPoints, pointsForAction, keyboardKey],
  );

  return (
    <div
      className='action-block'
      onKeyDown={handleKeyboardClick}
      tabIndex={0}
      role='button'
      onClick={handleClick}
    >
      <img className='action-block__image' src={image} alt={`Icon-${text}`} />
      <p className='action-block__text'>{text}</p>
    </div>
  );
};
