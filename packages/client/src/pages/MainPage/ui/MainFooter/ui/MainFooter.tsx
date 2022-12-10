import LeaderBoardIcon from '@/shared/assets/images/LeaderBoardIcon.png';
import SettingsIcon from '@/shared/assets/images/SettingsIcon.png';
import css from './MainFooter.module.scss';

export const MainFooter = () => {
  return (
    <footer className={css.main__footer}>
      <img className={css.main__footer__image} src={LeaderBoardIcon} alt='LeaderBoardIcon' />
      <img className={css.main__footer__image} src={SettingsIcon} alt='LeaderBoardIcon' />
    </footer>
  );
};
