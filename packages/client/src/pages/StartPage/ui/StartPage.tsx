import ArrowRightSvg from '@/shared/assets/images/arrowRight.svg';
import CrossSvg from '@/shared/assets/images/cross.svg';
import { CharacterAPI } from '@/shared/lib/api/character';
import { useAppSelector } from '@/shared/lib/redux';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { useCallback, useState } from 'react';
import { StartScreens } from '../config/startScreens';
import css from './StartPage.module.scss';

const screensNumber = StartScreens.length;

const StartPage = () => {
  const [screenId, setScreenId] = useState(0);
  const [isStartPageActive, setIsStartPageActive] = useState(true);
  const { id } = useAppSelector((state) => state.user);

  const closeModal = useCallback(() => {
    CharacterAPI.setHasSeenTutorial(id, true);
    setIsStartPageActive(false);
  }, [id]);

  const switchScreen = useCallback(() => {
    const nextId = screenId + 1;

    if (nextId >= screensNumber) {
      closeModal();
    } else {
      setScreenId(nextId);
    }
  }, [screenId, closeModal]);

  const isLastScreen = screenId === screensNumber - 1;
  const { title, text, imgSrc } = StartScreens[screenId];

  return (
    <Modal
      isActive={isStartPageActive}
      setIsActive={setIsStartPageActive}
      title={title}
      isCloseButtonShown={false}
      isClosable={false}
    >
      <span>{text}</span>
      <img src={imgSrc} alt='Cat' />
      <div className={css.footer}>
        <Button
          className={css.footer__button}
          size='large'
          color='transparent'
          onClick={closeModal}
        >
          <CrossSvg />
        </Button>
        <Button
          className={css.footer__button}
          size='large'
          color='transparent'
          onClick={switchScreen}
        >
          {isLastScreen && <span>Start</span>}
          <ArrowRightSvg />
        </Button>
      </div>
    </Modal>
  );
};

export default StartPage;
