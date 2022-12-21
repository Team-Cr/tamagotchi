import iconLnk from '@/shared/assets/images/cat.png';
import image from '@/shared/assets/images/gatito_paradax3.gif';
import iconBtn from '@/shared/assets/images/pow2.png';
import { SigninData } from '@/shared/lib/api';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Link } from '@/shared/ui/Link';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styles from './SignInPage.module.scss';
import { AuthThunk } from '@/processes/auth';
import { useAppDispatch } from '@/shared/lib/redux';
import { ROUTES } from '@/shared/constants/routes';
import { TransitionBlock } from '@/widgets/Transitions';

const SignInPage = () => {
  const [form, setForm] = useState<SigninData>({ login: '', password: '' });
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(AuthThunk.signIn(form));
    },
    [dispatch, form],
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form],
  );

  return (
    <TransitionBlock>
      <form onSubmit={onSubmit}>
        <div className={styles.signin__container}>
          <div className={styles.signin__title}>Welcome, catlover</div>

          <div className={styles.signin__pet}>
            <img className={styles.signin__img} src={image} alt='gatito' />
          </div>

          <div className={styles.signin__pet__create}>
            <Link href={ROUTES.SignUp} icon={iconLnk}>
              I want a new
            </Link>
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

          <Button
            className={styles.signin__button}
            name='loginBtn'
            size='large'
            color='primary'
            icon={iconBtn}
            type='submit'
          >
            Visit my cat
          </Button>
        </div>
      </form>
    </TransitionBlock>
  );
};

export { SignInPage };
