import { useEffect, useState } from 'react';
import BackgroundMusic from '@/shared/assets/sounds/backgroundMusic.mp3';
// import BackgroundMusic from '@/shared/assets/sounds/actionSound.wav';
import AudioOff from '@/shared/assets/images/audioOff.png';
import AudioOn from '@/shared/assets/images/audioOn.png';
import classNames from 'classnames';
import css from './BackgroundAudioSwitcher.module.scss';

const audio = new Audio(BackgroundMusic);

export const BackgroundAudioSwitcher = () => {

  const [isAudioOn, setIsAudioOn] = useState(false);

  useEffect(() => {
    if (audio === undefined) return;
    audio.loop = true;
    audio.volume = 0.05;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleIsAudioOn = () => {
    setIsAudioOn(!isAudioOn);
  };

  useEffect(() => {
    if (audio === undefined) return;
    if (isAudioOn) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isAudioOn]);

  return (
    <div className={classNames(css.switcher)}>
      <button
        className={classNames(css.button)}
        onClick={() => {
          toggleIsAudioOn();
        }}
      >
        <div>
          {isAudioOn ? (
            <img className={classNames(css.img)} src={AudioOn} alt='audioOn' />
          ) : (
            <img className={classNames(css.img)} src={AudioOff} alt='audioOn' />
          )}
        </div>
      </button>
    </div>
  );
};
