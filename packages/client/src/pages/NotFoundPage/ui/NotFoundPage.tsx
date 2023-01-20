import NotFoundImage from '@/shared/assets/images/NotFound.png';
import { TransitionBlock } from '@/widgets/Transitions';
import { Link } from 'react-router-dom';

import css from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <TransitionBlock className={css['not-found']}>
      <h1 className={css['not-found__title']}>404</h1>
      <img src={NotFoundImage} alt='Not found icon' className={css['not-found__image']} />
      <p>Can&apos;t find this page</p>
      <Link to={'/'} className={css['not-found__link']}>
        Back to main page
      </Link>
    </TransitionBlock>
  );
};
