import LeaderboardSvg from '@/shared/assets/images/leaderboard.svg';
import PreferencesSvg from '@/shared/assets/images/preferences.svg';
import css from './MainFooter.module.scss';

export const MainFooter = () => {
  return (
    <footer className={css.main__footer}>
      <LeaderboardSvg />
      <PreferencesSvg />
    </footer>
  );
};
