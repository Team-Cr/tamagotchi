import { Avatar } from '@/shared/ui/Avatar';
import { ChangeEvent, FC, useCallback } from 'react';
import css from './ProfileAvatar.module.scss';
import { useAppDispatch } from '@/shared/lib/redux';
import { UserThunk } from '@/entities/user/api';

type ProfileAvatarProps = {
  avatar?: string;
};

export const ProfileAvatar: FC<ProfileAvatarProps> = (props) => {
  const { avatar } = props;
  const dispatch = useAppDispatch();

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (!files) {
      alert('File not found');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', files[0]);

    dispatch(UserThunk.updateAvatar(formData))
  }, [dispatch]);

  return (
    <label>
      <Avatar src={avatar || ''} className={css.avatar} alt='change avatar' title='Change avatar' />
      <input type='file' name='avatar' hidden={true} onChange={handleChange} />
    </label>
  );
};
