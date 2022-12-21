import LeaderBoardIcon from '@/shared/assets/images/LeaderBoardIcon.png';
import SettingsIcon from '@/shared/assets/images/SettingsIcon.png';
import css from './MainFooter.module.scss';

import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';

export const MainFooter = () => {
  return (
    <footer className={css.main__footer}>
      <Link to={ROUTES.LeaderBoard}>
        <img className={css.main__footer__image} src={LeaderBoardIcon} alt='LeaderBoardIcon' />
      </Link>
      <Link to={ROUTES.Profile}>
        <img className={css.main__footer__image} src={SettingsIcon} alt='SettingsIcon' />
      </Link>
    </footer>
  );
};
