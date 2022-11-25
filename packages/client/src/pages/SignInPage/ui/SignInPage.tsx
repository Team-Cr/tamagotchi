import { Input } from '@/shared/ui/Input/ui/Input';
import styles from './SignInPage.module.scss';
import image from '@/shared/assets/images/gatito_paradax3.gif';

const SignInPage = () => {
  return (
    <>
      <div className={styles.title}>Welcome, catlover</div>
      <div className={styles.container}>
        <div className={styles.column}>
          <img src={image} alt='gatito' />
          <div className={styles.signup}>
            <button className={styles.button}>I want a new</button>
          </div>
        </div>
        <div className={styles.column}>
          <div>
            <Input name='login' type='text' value='' placeholder='Login' />
            <Input name='password' type='password' value='' placeholder='Password' />
          </div>
          <div>
            <button className={styles.button}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export { SignInPage };
