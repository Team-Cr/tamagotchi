import { FC, useEffect, useState } from 'react';
import css from './OAuthPanel.module.scss';
import yandexIcon from '@/shared/assets/images/yandex-pixel.png';
import { YandexOAuth } from '@/processes/auth';
import { Link } from 'react-router-dom';

export const OAuthPanel: FC = () => {
  const [yandexLink, setYandexLink] = useState<string>('');

  useEffect(() => {
    YandexOAuth.getServiceId().then((res) => {
      setYandexLink(YandexOAuth.getOAuthLink(res.data.service_id));
    });
  }, []);

  return (
    <div className={css.signin__oauth}>
      <span className={css.signin__oauth_title}>Login through buddies</span>
      <Link to={yandexLink} target='_blank' rel='noreferrer'>
        <img className={css.signin__oauth_item} src={yandexIcon} alt='auth through yandex' />
      </Link>
    </div>
  );
};
