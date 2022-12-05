import { Typography } from '@/shared/ui/Typography';
import { RegistrationForm } from '@/features';
import { images } from '@/shared/assets';

import styles from './styles.module.scss';

export const Registration = () => {
  const onSubmitHandler = (values: unknown) => {
    console.log(values);
  };

  return (
    <div className={styles.reg}>
      <section className={styles.reg__left}>
        <h1>Create a new story</h1>
        <img
                    className={styles.reg__image}
                    src={images.CatImage}
                    alt="cat-temporary"
                />
        <div className={styles.reg__desc}>
          <Typography>I already have a</Typography>
          <img src={images.CatPixelImage} alt='cat-pixel-icon' />
        </div>
      </section>
      <section className={styles.reg__right}>
        <RegistrationForm onSubmit={onSubmitHandler} />
      </section>
    </div>
  );
};
