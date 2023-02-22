import ServerErrorImage from '@/shared/assets/images/ServerError.png';
import { ComponentProps } from '@/shared/ui/types';
import css from './ErrorBanner.module.scss';
import { ROUTES } from '@/shared/constants/routes';
import { Link } from '@/shared/ui/Link';

interface ErrorBannerProps extends ComponentProps {
  message?: string;
  hasRedirectButton?: boolean;
}

export const ErrorBanner = (props: ErrorBannerProps) => {
  const { message = 'Something went wrong', hasRedirectButton = true } = props;

  const showLink = () => {
    if (!hasRedirectButton) {
      return '';
    }
    return <Link href={ROUTES.Main}>{'< Go home'}</Link>;
  };

  return (
    <div className={css.container}>
      <p className={css.error}>ERROR</p>
      <img src={ServerErrorImage} alt='Error' />
      <p className={css.error__message}>{message}</p>
      {showLink()}
    </div>
  );
};
