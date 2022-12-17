import { User } from '@/shared/lib/api';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { ModalProps } from '@/shared/ui/Modal/ui/Modal';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import css from './ProfileModal.module.scss';
import { useAppDispatch } from '@/shared/lib/redux';
import { UserThunk } from '@/entities/user';

interface ProfileModalProps {
  login: string;
}

interface newPasswordProps {
  oldPassword: string;
  newPassword: string;
  confirm: string;
}

export const ProfileModal: FC<Omit<ModalProps, 'children' | 'title'> & ProfileModalProps> = (
  props,
) => {
  const dispatch = useAppDispatch();
  const { isActive, setIsActive } = props;

  const [password, setPassword] = useState<newPasswordProps>({
    oldPassword: '',
    newPassword: '',
    confirm: '',
  });

  const closeModal = useCallback(() => {
    setIsActive(false);
  }, [setIsActive]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as keyof User;
    setPassword((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  }, []);

  const updatePassword = useCallback(() => {
    const { confirm, ...updatePassword } = password;

    // TODO pass error to inputs
    if (updatePassword.newPassword !== confirm) {
      return;
    }

    // тут возможно лишний диспатч...
    dispatch(UserThunk.updatePassword(updatePassword));

    setIsActive(false);
  }, [dispatch, password, setIsActive]);

  return (
    <Modal
      isActive={isActive}
      setIsActive={setIsActive}
      title={'Change password'}
      isCloseButtonShown={false}
    >
      <div className={css.profile__modal_fields}>
        <Input
          type='password'
          name={'oldPassword'}
          placeholder='Old password'
          onChange={handleChange}
        />
        <Input
          type='password'
          name={'newPassword'}
          placeholder='New password'
          onChange={handleChange}
        />
        <Input
          type='password'
          name={'confirm'}
          placeholder='Confirm password'
          onChange={handleChange}
        />
      </div>
      <div className={css.profile__modal_footer}>
        <Button size='medium' color='secondary' onClick={closeModal}>
          Cancel
        </Button>
        <Button size='medium' color='success' onClick={updatePassword}>
          Save
        </Button>
      </div>
    </Modal>
  );
};
