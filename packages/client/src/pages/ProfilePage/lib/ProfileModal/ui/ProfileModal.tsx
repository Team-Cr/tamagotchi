import { PasswordUpdate, ProfileAPI, User } from '@/shared/lib/api';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { ModalProps } from '@/shared/ui/Modal/ui/Modal';
import { ChangeEvent, FC, useState } from 'react';
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
  const { show, setModalActive } = props;

  const [password, setPassword] = useState<newPasswordProps>({
    old: '',
    new: '',
    confirm: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as keyof User;
    setPassword((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  const updatePassword = () => {
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
        setModalActive(false);
        alert('Password is changed');
      })
      .catch((err) => {
        alert(err.response?.data.reason || err.message);
      });
  };

  return (
    <Modal
      show={show}
      setModalActive={setModalActive}
      title={'Change password'}
      isCloseButtonShown={false}
    >
      {/* TODO change to global input */}
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
        <Button
          size='medium'
          color='secondary'
          onClick={() => {
            setModalActive(false);
          }}
        >
          Cancel
        </Button>
        <Button size='medium' color='success' onClick={updatePassword}>
          Save
        </Button>
      </div>
    </Modal>
  );
};
