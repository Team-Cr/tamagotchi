import { KeyboardEvent, useCallback } from 'react';
import { BarsPointsType, HandleUpdateBarsPointsType } from '../../../../../types';

import css from './ActionBlock.module.scss';

interface ActionBlockProps {
  image: string;
  text: string;
  pointsForAction: BarsPointsType;
  handleUpdateBarsPoints: HandleUpdateBarsPointsType;
  keyboardKey: string;
}

export const ActionBlock = (props: ActionBlockProps) => {
  const { handleUpdateBarsPoints, image, pointsForAction, text, keyboardKey } = props;

  const handleClick = useCallback(
    () => handleUpdateBarsPoints(pointsForAction),
    [handleUpdateBarsPoints, pointsForAction],
  );

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
      className={css.actionBlock}
      onKeyDown={handleKeyboardClick}
      tabIndex={0}
      role='button'
      onClick={handleClick}
    >
      <img className={css.actionBlock__image} src={image} alt={`Icon-${text}`} />
      <p className={css.actionBlock__text}>{text}</p>
    </div>
  );
};
