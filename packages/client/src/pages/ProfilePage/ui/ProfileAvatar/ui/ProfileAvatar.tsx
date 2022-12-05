import emptyAvatar from '@/shared/assets/images/empty-avatar.png';
import { ProfileAPI } from '@/shared/lib/api';
import { Avatar } from '@/shared/ui/Avatar';
import { ChangeEvent, FC, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import css from './ProfileAvatar.module.scss';

type ProfileAvatarProps = {
  avatar: string;
};

export const ProfileAvatar: FC<ProfileAvatarProps> = (props) => {
  const { avatar = '' } = props;
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(avatar);
  }, [avatar]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (!files) {
      alert('File not found');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', files[0]);

    ProfileAPI.updateAvatar(formData)
      .then((res) => {
        setImage(res.data.avatar);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const noImageHandler = useCallback((e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = emptyAvatar;
  }, []);

  return (
    <label>
      <Avatar
        src={image}
        className={css.avatar}
        onError={noImageHandler}
        alt='change avatar'
        title='Change avatar'
      />
      <input type='file' name='avatar' hidden={true} onChange={handleChange} />
    </label>
  );
};
