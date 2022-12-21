import { Button } from '@/shared/ui/Button';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { ProfileAvatar } from './ProfileAvatar';
import { ProfileInput } from './ProfileInput';
import { ProfileModal } from './ProfileModal';
import css from './ProfilePage.module.scss';
import { ArrowBack } from '@/shared/ui/ArrowBack';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { UserThunk } from '@/entities/user';
import { AuthThunk } from '@/processes/auth';
import { UserBasicData } from '@/shared/lib/api';
import { TransitionBlock } from '@/widgets/Transitions';

export const ProfilePage = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [isChangePasswordModalActive, setIsChangePasswordModalActive] = useState(false);
  const [basicData, setBasicData] = useState<UserBasicData>(user);
  const { phone, display_name, first_name, second_name, email } = basicData;

  const showModal = useCallback(() => {
    setIsChangePasswordModalActive(true);
  }, []);

  useEffect(() => {
    setBasicData(user);
  }, [user]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setBasicData((prevState) => ({
      ...prevState,
      [name as keyof UserBasicData]: value,
    }));
  }, []);

  const logout = useCallback(() => {
    dispatch(AuthThunk.logout());
  }, [dispatch]);

  const saveChanges = useCallback(() => {
    dispatch(UserThunk.updateBasicData(basicData));
  }, [basicData, dispatch]);

  return (
    <TransitionBlock>
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
            value={first_name}
            onChange={handleChange}
          />
          <ProfileInput
            label='Surname'
            name={'second_name'}
            value={second_name}
            onChange={handleChange}
          />
          <ProfileInput
            label='Cat name'
            name={'display_name'}
            value={display_name || ''}
            onChange={handleChange}
          />
          <ProfileInput label='Email' name={'email'} value={email} onChange={handleChange} />
          <ProfileInput label='Number' name={'phone'} value={phone} onChange={handleChange} />
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
    </TransitionBlock>
  );
};
