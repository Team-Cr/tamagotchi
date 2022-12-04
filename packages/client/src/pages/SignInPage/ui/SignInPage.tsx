import iconLnk from '@/shared/assets/images/cat.png';
import image from '@/shared/assets/images/gatito_paradax3.gif';
import iconBtn from '@/shared/assets/images/pow2.png';
import { AuthAPI, SigninData } from '@/shared/lib/api';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/ui/Input';
import { Link } from '@/shared/ui/Link';
import { useCallback, useState } from 'react';
import styles from './SignInPage.module.scss';

const SignInPage = () => {
  const [form, setForm] = useState<SigninData>({ login: '', password: '' });

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      AuthAPI.signIn(form);
    },
    [form],
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form],
  );

  return (
    <form onSubmit={onSubmit}>
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
            onChange={onChange}
          />
          <Input
            name='password'
            type='password'
            value={form.password}
            placeholder='Password'
            onChange={onChange}
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
