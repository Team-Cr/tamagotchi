import { PasswordUpdate, ProfileAPI, User } from '@/shared/lib/api';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { ModalProps } from '@/shared/ui/Modal/ui/Modal';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import css from './ProfileModal.module.scss';

interface ProfileModalProps {
  login: string;
}

interface newPasswordProps {
  old: string;
  new: string;
  confirm: string;
}

export const ProfileModal: FC<Omit<ModalProps, 'children' | 'title'> & ProfileModalProps> = (
  props,
) => {
  const { isActive, setIsActive } = props;

  const [password, setPassword] = useState<newPasswordProps>({
    old: '',
    new: '',
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
    // TODO pass error to inputs
    if (password.new !== password.confirm) {
      return;
    }
    const data: PasswordUpdate = {
      oldPassword: password.old,
      newPassword: password.new,
    };

    ProfileAPI.updatePassword(data)
      .then(() => {
        setIsActive(false);
        alert('Password is changed');
      })
      .catch((err) => {
        alert(err.response?.data.reason || err.message);
      });
  }, [password, setIsActive]);

  return (
    <Modal
      isActive={isActive}
      setIsActive={setIsActive}
      title={'Change password'}
      isCloseButtonShown={false}
    >
      <div className={css.profile__modal_fields}>
        <Input type='password' name={'old'} placeholder='Old password' onChange={handleChange} />
        <Input type='password' name={'new'} placeholder='New password' onChange={handleChange} />
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
