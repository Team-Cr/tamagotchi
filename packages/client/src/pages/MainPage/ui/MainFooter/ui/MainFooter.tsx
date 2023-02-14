import ForumIcon from '@/shared/assets/images/forum.png';
import SettingsIcon from '@/shared/assets/images/settings.png';
import LeaderBoardIcon from '@/shared/assets/images/trophy.png';
import { ROUTES } from '@/shared/constants/routes';
import { Link } from '@/shared/ui/Link';
import css from './MainFooter.module.scss';

export const MainFooter = () => {
  return (
    <footer className={css.main__footer}>
      <div className={css.main__footer__buttons}>
        <Link href={ROUTES.Forums} icon={ForumIcon} />
        <Link href={ROUTES.LeaderBoard} icon={LeaderBoardIcon} />
      </div>

      <div className={css.main__footer__buttons}>
        <Link href={ROUTES.Profile} icon={SettingsIcon} />
      </div>
    </footer>
  );
};
