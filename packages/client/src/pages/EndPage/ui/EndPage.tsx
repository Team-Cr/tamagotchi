import { AuthThunk } from '@/processes/auth';
import { useAppDispatch } from '@/shared/lib/redux';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { useCallback, useState } from 'react';
import { endScreen } from '../config/endScreens';
import css from './EndPage.module.scss';

const EndPage = () => {
  const [isEndPageActive, setIsEndPageActive] = useState(true);
  const dispatch = useAppDispatch();
  const { title, text, imgSrc } = endScreen;

  const logout = useCallback(() => {
    dispatch(AuthThunk.logout());
  }, [dispatch]);

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
        <Button className={css.footer__button} size='large' color='primary' onClick={logout}>
          <span>Log out</span>
        </Button>
      </div>
    </Modal>
  );
};

export default EndPage;
