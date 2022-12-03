import { AuthAPI, ProfileAPI, User } from '@/shared/lib/api';
import { Button } from '@/shared/ui/Button';
import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { ProfileAvatar } from './ProfileAvatar';
import { ProfileInput } from './ProfileInput';
import { ProfileModal } from './ProfileModal';
import css from './ProfilePage.module.scss';

const userInitialState: User = {
  id: -1,
  first_name: '',
  second_name: '',
  display_name: '',
  login: '',
  email: '',
  phone: '',
  avatar: '',
};

export const ProfilePage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [user, setUser] = React.useState<User>(userInitialState);

  const toggleModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    AuthAPI.getUser()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUser((prevState) => ({
      ...prevState,
      [name as keyof User]: value,
    }));
  }, []);

  const saveChanges = () => {
    ProfileAPI.updateData(user)
      .then(() => {
        alert('Profile is updated');
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className={css.profile__container}>
        <ProfileAvatar avatar={user.avatar} />

        <Button
          size={'small'}
          onClick={toggleModal}
        >
          Change password
        </Button>

        <div className={css.profile__fields}>
          <ProfileInput
            label='Name'
            name={'first_name'}
            value={user.first_name}
            onChange={handleChange}
          />
          <ProfileInput
            label='Surname'
            name={'second_name'}
            value={user.second_name}
            onChange={handleChange}
          />
          <ProfileInput
            label='Cat name'
            name={'display_name'}
            value={user.display_name}
            onChange={handleChange}
          />
          <ProfileInput
            label='Email'
            name={'email'}
            value={user.email}
            onChange={handleChange}
          />
          <ProfileInput
            label='Number'
            name={'phone'}
            value={user.phone}
            onChange={handleChange}
          />
        </div>

        <Button
          color='success'
          onClick={saveChanges}
        >
          Save changes
        </Button>

        <ProfileModal
          login={user.login}
          show={isOpen}
          setModalActive={setIsOpen}
        />
      </div>
    </>
  );
};
