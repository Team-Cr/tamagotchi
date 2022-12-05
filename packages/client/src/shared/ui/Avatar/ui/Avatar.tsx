import { ResourceAPI } from '@/shared/lib/api';
import classNames from 'classnames';
import { ImgHTMLAttributes, useEffect, useState } from 'react';
import css from './Avatar.module.scss';

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

  return (
    <div className={classNames(css.avatar, className)}>
      <img src={imgSrc} alt='Avatar' {...rest} />
    </div>
  );
};
