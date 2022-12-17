import { Typography } from '@/shared/ui/Typography';
import { RegistrationForm } from '@/features/RegistrationForm';
import { images } from '@/shared/assets/images';

import styles from './styles.module.scss';
import { Link } from '@/shared/ui/Link';
import { ROUTES } from '@/shared/constants/routes';
import { TransitionBlock } from '@/widgets/Transitions/ui/TransitionBlock';

export const RegistrationPage = () => {
  return (
    <TransitionBlock className={styles.reg}>
      <section className={styles.reg__left}>
        <h1>Create a new story</h1>
        <img className={styles.reg__image} src={images.CatImage} alt='cat-temporary' />
        <Link href={ROUTES.Login} className={styles.reg__desc}>
          <Typography>I already have a</Typography>
          <img src={images.CatPixelImage} alt='cat-pixel-icon' />
        </Link>
      </section>
      <section className={styles.reg__right}>
        <RegistrationForm />
      </section>
    </TransitionBlock>
  );
};
