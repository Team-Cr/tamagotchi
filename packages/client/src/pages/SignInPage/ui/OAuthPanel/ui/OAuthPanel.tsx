import { FC, ReactElement, useEffect, useState } from 'react';
import css from './OAuthPanel.module.scss';
import yandexIcon from '@/shared/assets/images/yandex-pixel.png';
import { YandexOAuth } from '@/processes/auth';

export const OAuthPanel: FC = () => {
  const [yandexLink, setYandexLink] = useState<string | ReactElement>('');

  const getYandexOAuth = () => {
    YandexOAuth.getServiceId().then((res) => {
      const link = YandexOAuth.getOAuthLink(res.data.service_id);
      setYandexLink(
        <a href={link} rel='noreferrer'>
          <img className={css.signin__oauth_item} src={yandexIcon} alt='auth through yandex' />
        </a>,
      );
    });
  };

  useEffect(() => {
    getYandexOAuth();
  }, []);

  return (
    <div className={css.signin__oauth}>
      <span className={css.signin__oauth_title}>Login through buddies</span>
      {yandexLink}
    </div>
  );
};
