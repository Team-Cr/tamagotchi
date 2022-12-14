import ArrowRightSvg from '@/shared/assets/images/arrowRight.svg';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { useState } from 'react';
import { endScreen } from '../config/endScreens';
import css from './EndPage.module.scss';

export const EndPage = () => {
  const [isEndPageActive, setIsEndPageActive] = useState(true);

  const { title, text, imgSrc } = endScreen;

  return (
    <Modal
      isActive={isEndPageActive}
      setIsActive={setIsEndPageActive}
      title={title}
      isCloseButtonShown={false}
      isClosable={false}
    >
      <span>{text}</span>
      <img src={imgSrc} alt='Cat' />
      <div className={css.footer}>
        {/* TODO Обернуть в React Router Link */}
        <Button className={css.footer__button} size='large' color='transparent'>
          <span>To menu</span>
          <ArrowRightSvg />
        </Button>
      </div>
    </Modal>
  );
};
