import { KeyboardEvent, useCallback } from 'react';
import css from './ActionBlock.module.scss';

type HandleUpdateBarsPointsType = ({ level, hp }: BarsPointsType) => void;

export interface ActionBlockProps {
  image: string;
  text: string;
  pointsForAction: BarsPointsType;
  handleUpdateBarsPoints: HandleUpdateBarsPointsType;
  keyboardKey: string;
  action: () => void | undefined;
}

export const ActionBlock = (props: ActionBlockProps) => {
  const { handleUpdateBarsPoints, image, pointsForAction, text, keyboardKey, action } = props;

  const handleClick = useCallback(() => {
    handleUpdateBarsPoints(pointsForAction);
    action();
  }, [handleUpdateBarsPoints, pointsForAction, action]);

  const handleKeyboardClick = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === keyboardKey) {
        handleUpdateBarsPoints(pointsForAction);
        action();
      }
    },
    [handleUpdateBarsPoints, pointsForAction, keyboardKey, action],
  );

  return (
    <div
      className={css['action-block']}
      onKeyDown={handleKeyboardClick}
      tabIndex={0}
      role='button'
      onClick={handleClick}
    >
      <img className={css['action-block__image']} src={image} alt={`Icon-${text}`} />
      <p className={css['action-block__text']}>{text}</p>
    </div>
  );
};
