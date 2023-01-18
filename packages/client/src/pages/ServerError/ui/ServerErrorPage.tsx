import ServerErrorImage from '@/shared/assets/images/ServerError.png';
import { TransitionBlock } from '@/widgets/Transitions';

import './ServerErrorPage.scss';

const ServerErrorPage = () => {
  return (
    <TransitionBlock className='not-found'>
      <h1 className='not-found__title'>505</h1>
      <img src={ServerErrorImage} alt='Server error icon' className='not-found__image' />
      <p className='not-found__text'>Server currently not working</p>
      <p className='not-found__text blue'>We will fix it soon</p>
    </TransitionBlock>
  );
};

// eslint-disable-next-line import/no-default-export
export default ServerErrorPage;
