import { ResourceAPI } from '@/shared/lib/api';
import classNames from 'classnames';
import { ImgHTMLAttributes, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import css from './Avatar.module.scss';
import emptyAvatar from '@/shared/assets/images/empty-avatar.png';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { src = '', className = '', ...rest } = props;

  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    setImgSrc(ResourceAPI.getResource(src));
  }, [src]);

  const noImageHandler = useCallback((e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = emptyAvatar;
  }, []);

  return (
    <div className={classNames(css.avatar, className)}>
      <img src={imgSrc} alt='Avatar' onError={noImageHandler} {...rest} />
    </div>
  );
};
