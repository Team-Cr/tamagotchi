import { Input } from '@/shared/ui/Input/ui/Input';
import styles from './SignInPage.module.scss';
import image from '@/shared/assets/images/gatito_paradax3.gif';
import iconBtn from '@/shared/assets/images/pow2.png';
import iconLnk from '@/shared/assets/images/cat.png';
import { Button } from '@/shared/ui/Button';
import { Link } from '@/shared/ui/Link';

const SignInPage = () => {
  return (
    <form>
      <div className={styles.container}>
        <div className={styles.title}>Welcome, catlover</div>

        <div className={styles.gatito}>
          <img src={image} alt='gatito' />
        </div>

        <div className={styles['new-gatito']}>
          <Link name='signUpLink' href='#' label='I want a new' icon={iconLnk} />
        </div>

        <div className={styles.fields}>
          <Input name='login' type='text' value='' placeholder='Login' />
          <Input name='password' type='password' value='' placeholder='Password' />
        </div>

        <div className={styles.button}>
          <Button name='loginBtn' color='red' text={'Visit my cat'} icon={iconBtn} />
        </div>
      </div>
    </form>
  );
};

export { SignInPage };
