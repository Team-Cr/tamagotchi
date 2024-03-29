import css from './OAuthPage.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { YandexOAuth } from '@/processes/auth';
import { TransitionBlock } from '@/widgets/Transitions';
import { ROUTES } from '@/shared/constants/routes';
import { ErrorBanner } from '@/shared/ui/ErrorBanner';
import { SpinnerPaw } from '@/shared/ui/SpinnerPaw';

export const OAuthPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState('');

  const code = searchParams.get('code');

  const checkCode = () => {
    if (code) {
      YandexOAuth.auth(code)
        .then((res) => {
          console.log(res.data);
          return navigate(ROUTES.Main);
        })
        .catch((err) => {
          setError(err.response.data.reason);
        });
    }
  };

  useEffect(() => {
    const timer = setTimeout(checkCode, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <TransitionBlock className={css.container}>
      {error ? <ErrorBanner message={error} /> : <SpinnerPaw className={css.spinner} />}
    </TransitionBlock>
  );
};
