import styles from './styles.module.scss';
import { ChangeEvent, EventHandler, FC, SyntheticEvent, useEffect, useState } from 'react'
import emptyAvatar from '@/shared/assets/empty-avatar.jpeg';
import { ProfileAPI } from '@/shared/api/swagger/user'
import { ResourceAPI } from '@/shared/api/swagger/resource'

type ProfileAvatarProps = {
  avatar?: string
}

export const ProfileAvatar: FC<ProfileAvatarProps> = (props) => {
  const {
    avatar
  } = props;
  const [image, setImage] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files) {
      alert('File no found')
      return;
    }

    const formData = new FormData();
    formData.append('avatar', files?.[0]);

    ProfileAPI.updateAvatar(formData)
      .then((res) => {
        setImage(ResourceAPI.getResource(res.data.avatar || ''));
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const noImageHandler = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; e.currentTarget.src = emptyAvatar
  }

  return (
    <>
      <label>
        <img  className={styles.avatar}
              src={image || ResourceAPI.getResource(avatar || '')}
              onError={noImageHandler}
              alt='change avatar'
              title='Change avatar'
        />
        <input type='file' name='avatar' hidden={true} onChange={handleChange}/>
      </label>
    </>
  )
}
