import { Input } from '@/shared/ui/Input/ui/Input';
import styles from './SignInPage.module.scss';
import image from '@/shared/assets/images/gatito_paradax3.gif';
import iconBtn from '@/shared/assets/images/pow2.png';
import iconLnk from '@/shared/assets/images/cat.png';
import { Button } from '@/shared/ui/Button';
import { Link } from '@/shared/ui/Link';
import { useCallback, useState } from 'react';

const SignInPage = () => {
  const [form, setForm] = useState({ login: '', password: '' });

  const onChangeLogin = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, login: e.target.value }),
    [form],
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, password: e.target.value }),
    [form],
  );

  return (
    <form>
      <div className={styles.signin__container}>
        <div className={styles.signin__title}>Welcome, catlover</div>

        <div className={styles.signin__pet}>
          <img className={styles.signin__img} src={image} alt='gatito' />
        </div>

        <div className={styles.signin__pet__create}>
          <Link name='signUpLink' href='#' label='I want new' icon={iconLnk} />
        </div>

        <div className={styles.signin__fields}>
          <Input
            name='login'
            type='text'
            value={form.login}
            placeholder='Login'
            onChange={onChangeLogin}
          />
          <Input
            name='password'
            type='password'
            value={form.password}
            placeholder='Password'
            onChange={onChangePassword}
          />
        </div>

        <div className={styles.signin__button}>
          <Button name='loginBtn' color='red' text={'Visit my cat'} icon={iconBtn} />
        </div>
      </div>
    </form>
  );
};

export { SignInPage };
