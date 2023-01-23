import NotFoundImage from '@/shared/assets/images/NotFound.png';
import { TransitionBlock } from '@/widgets/Transitions';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <TransitionBlock className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <img src={NotFoundImage} alt='Not found icon' className='not-found__image' />
      <p>Can&apos;t find this page</p>
      <Link to={'/'} className='not-found__link'>
        Back to main page
      </Link>
    </TransitionBlock>
  );
};

export default NotFoundPage;
