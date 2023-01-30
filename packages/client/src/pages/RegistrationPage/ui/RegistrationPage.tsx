import { RegistrationForm } from '@/features/RegistrationForm';
import { images } from '@/shared/assets/images';
import { ROUTES } from '@/shared/constants/routes';
import { Link } from '@/shared/ui/Link';
import { Typography } from '@/shared/ui/Typography';
import { TransitionBlock } from '@/widgets/Transitions';
import styles from './styles.module.scss';

const RegistrationPage = () => {
  return (
    <TransitionBlock className={styles.reg}>
      <section className={styles.reg__left}>
        <h1 className={styles.reg__title}>Create a new story</h1>
        <img className={styles.reg__image} src={images.CatImage} alt='cat-temporary' />
        <Link href={ROUTES.Login} className={styles.reg__desc} icon={images.CatPixelImage}>
          <Typography>I already have a </Typography>
        </Link>
      </section>
      <section className={styles.reg__right}>
        <RegistrationForm />
      </section>
    </TransitionBlock>
  );
};

export default RegistrationPage;
