import { Typography } from '@/shared/ui/Typography';
import { RegistrationForm } from '@/features/RegistrationForm';
import { images } from '@/shared/assets/images';

import styles from './styles.module.scss';

export const RegistrationPage = () => {
  return (
    <div className={styles.reg}>
      <section className={styles.reg__left}>
        <h1>Create a new story</h1>
        <img className={styles.reg__image} src={images.CatImage} alt='cat-temporary' />
        <div className={styles.reg__desc}>
          <Typography>I already have a</Typography>
          <img src={images.CatPixelImage} alt='cat-pixel-icon' />
        </div>
      </section>
      <section className={styles.reg__right}>
        <RegistrationForm />
      </section>
    </div>
  );
};
