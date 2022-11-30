import { Typography } from '@/shared/ui/Typography';
import { RegistrationForm } from '@/widgets/RegistrationForm';
import { AnimationSleepCat } from '@/widgets/AnimationSleepCat';
import { RegFormType, useAuth } from '@/shared/hooks/useAuth';
import { images } from '@/shared/assets';

import styles from './styles.module.scss';

export const Registration = () => {
  const { registration } = useAuth();

  const onSubmitHandler = (values: RegFormType) => {
    registration(values);
  };

  return (
    <div className={styles.reg}>
      <section className={styles.reg__left}>
        <h1>Create a new story</h1>
        <AnimationSleepCat />
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
