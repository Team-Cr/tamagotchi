import ArrowRightSvg from '@/shared/assets/images/arrowRight.svg';
import CrossSvg from '@/shared/assets/images/cross.svg';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { useCallback, useState } from 'react';
import { StartScreens } from '../config/startScreens';
import css from './StartPage.module.scss';

const screensNumber = StartScreens.length;

export const StartPage = () => {
  const [screenId, setScreenId] = useState(0);
  const [show, setModalActive] = useState(true);

  const closeModal = useCallback(() => setModalActive(false), []);

  const switchScreen = useCallback(() => {
    const nextId = screenId + 1;

    if (nextId >= screensNumber) {
      setModalActive(false);
    } else {
      setScreenId(nextId);
    }
  }, [screenId]);

  const isLastScreen = screenId === screensNumber - 1;
  const { title, text, imgSrc } = StartScreens[screenId];

  return (
    <Modal
      show={show}
      setModalActive={setModalActive}
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
