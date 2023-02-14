import { KeyboardEvent, useCallback, useEffect, useState } from 'react';
import css from './ActionBlock.module.scss';
import ActionSound from '@/shared/assets/sounds/actionSound.wav';

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

  const [audio, setAudio] = useState(undefined as unknown as HTMLAudioElement);

  useEffect(() => {
    setAudio(new Audio(ActionSound));
  }, []);

  useEffect(() => {
    if (audio !== undefined) {
      audio.loop = false;
      audio.volume = 0.2;
    }
  }, [audio]);

  const handleClick = useCallback(() => {
    handleUpdateBarsPoints(pointsForAction);
    audio.play();
    action();
  }, [handleUpdateBarsPoints, pointsForAction, audio, action]);

  const handleKeyboardClick = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === keyboardKey) {
        handleUpdateBarsPoints(pointsForAction);
        audio.play();
        action();
      }
    },
    [keyboardKey, handleUpdateBarsPoints, pointsForAction, audio, action],
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
