import { Input } from '@/shared/ui/Input/ui/Input';
import styles from './SignInPage.module.scss';
import image from '@/shared/assets/images/gatito_paradax3.gif';

const SignInPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Welcome, catlover</div>

        <div className={styles.gatito}>
          <img src={image} alt='gatito' />
        </div>

        <div className={styles['new-gatito']}>
          <button>I want a new</button>
        </div>

        <div className={styles.fields}>
          <Input name='login' type='text' value='' placeholder='Login' />
          <Input name='password' type='password' value='' placeholder='Password' />{' '}
        </div>

        <div className={styles.button}>
          <button>Visit my cat</button>
        </div>
      </div>
    </>
  );
};

export { SignInPage };
