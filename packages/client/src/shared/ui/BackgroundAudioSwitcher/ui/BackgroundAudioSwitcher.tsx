import { useEffect, useState } from 'react';
import BackgroundMusic from '@/shared/assets/sounds/backgroundMusic.mp3';
import AudioOff from '@/shared/assets/images/audioOff.png';
import AudioOn from '@/shared/assets/images/audioOn.png';
import classNames from 'classnames';
import css from './BackgroundAudioSwitcher.module.scss';

export const BackgroundAudioSwitcher = () => {
  const [audio, setAudio] = useState(undefined as unknown as HTMLAudioElement);

  const [isAudioOn, setIsAudioOn] = useState(false);

  useEffect(() => {
    setAudio(new Audio(BackgroundMusic));
  }, []);

  useEffect(() => {
    if (audio !== undefined) {
      audio.loop = true;
      audio.volume = 0.05;
    }
  }, [audio]);

  const toggleIsAudioOn = () => {
    setIsAudioOn(!isAudioOn);
  };

  useEffect(() => {
    if (audio !== undefined) {
      if (isAudioOn) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [audio, isAudioOn]);

  useEffect(() => {
    if (audio !== undefined) {
      return () => {
        audio.pause();
      };
    }
  }, [audio]);

  useEffect(() => {
    console.log('isAudioOn:', isAudioOn);
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
