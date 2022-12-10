import { AuthAPI, ProfileAPI, User } from '@/shared/lib/api';
import { Button } from '@/shared/ui/Button';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { ProfileAvatar } from './ProfileAvatar';
import { ProfileInput } from './ProfileInput';
import { ProfileModal } from './ProfileModal';
import css from './ProfilePage.module.scss';
import { ArrowBack } from '@/shared/ui/ArrowBack';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { fetchUser, updateBasicData } from '@/entities/user/model/user';
import { UserBasicData } from '@/shared/lib/api/types/profile';

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
  const [isChangePasswordModalActive, setIsChangePasswordModalActive] = useState(false);
  const user = useAppSelector((state) => state.user);
  const [basicData, setBasicData] = useState<UserBasicData>(user)

  const showModal = useCallback(() => {
    setIsChangePasswordModalActive(true);
  }, []);

  // useEffect(() => {
  //   setBasicData(user)
  // }, [user]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setBasicData((prevState) => ({
      ...prevState,
      [name as keyof UserBasicData]: value,
    }));
  }, []);

  const logout = useCallback(() => {
    AuthAPI.logout().then(() => {
      // TODO redirect to login
      console.log('Logout');
    });
  }, []);

  const saveChanges = useCallback(() => {
    console.log(basicData);
    console.log(user);
  }, []);

  return (
    <>
      <ArrowBack />
      <div className={css.profile__container}>
        <ProfileAvatar avatar={user.avatar} />

        <Button size={'small'} onClick={showModal}>
          Change password
        </Button>

        <div className={css.profile__fields}>
          <ProfileInput
            label='Name'
            name={'first_name'}
            value={basicData.first_name}
            onChange={handleChange}
          />
          <ProfileInput
            label='Surname'
            name={'second_name'}
            value={basicData.second_name}
            onChange={handleChange}
          />
          <ProfileInput
            label='Cat name'
            name={'display_name'}
            value={basicData.display_name || ''}
            onChange={handleChange}
          />
          <ProfileInput label='Email' name={'email'} value={basicData.email} onChange={handleChange} />
          <ProfileInput label='Number' name={'phone'} value={basicData.phone} onChange={handleChange} />
        </div>

        <Button color={'success'} onClick={saveChanges}>
          Save changes
        </Button>

        <Button color={'transparent'} onClick={logout}>
          &#60; Logout
        </Button>

        <ProfileModal
          login={basicData.login}
          isActive={isChangePasswordModalActive}
          setIsActive={setIsChangePasswordModalActive}
        />
      </div>
    </>
  );
};
