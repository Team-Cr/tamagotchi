import { FC, useCallback, useEffect, useState } from 'react';
import styles from './SignInOAuth.module.scss';
import yandexIcon from '@/shared/assets/images/yandex-pixel.png';
import { YandexOAuth } from '@/processes/auth';

export const SignInOAuth : FC = () => {
  const [yandexLink, setYandexLink] = useState<string>('');

  useEffect(() => {
    YandexOAuth.getServiceId()
      .then((res) => {
        console.log(YandexOAuth.getOAuthLink(res.data.service_id));
        setYandexLink(YandexOAuth.getOAuthLink(res.data.service_id))
      })
  }, [])

  return (
    <div className={styles.signin__oauth}>
      <span className={styles.signin__oauth_title}>Login through buddies</span>
      <a href={yandexLink} target="_blank" rel="noreferrer">
        <img className={styles.signin__oauth_item} src={yandexIcon} alt='auth through yandex' />
      </a>
    </div>
  )
}
