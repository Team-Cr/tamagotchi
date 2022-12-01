import LeaderBoardIcon from '@/shared/assets/images/LeaderBoardIcon.png';
import SettingsIcon from '@/shared/assets/images/SettingsIcon.png';

import './MainFooter.scss';

export const MainFooter = () => {
  return (
    <footer className='main__footer'>
      <img className='main__footer__image' src={LeaderBoardIcon} alt='LeaderBoardIcon' />
      <img className='main__footer__image' src={SettingsIcon} alt='LeaderBoardIcon' />
    </footer>
  );
};
