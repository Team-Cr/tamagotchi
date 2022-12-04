import iconLnk from '@/shared/assets/images/cat.png';
import image from '@/shared/assets/images/gatito_paradax3.gif';
import iconBtn from '@/shared/assets/images/pow2.png';
import { AuthAPI, SigninData } from '@/shared/lib/api';
import { Button } from '@/shared/ui/Button';
import { Canvas } from '@/shared/ui/Canvas';
import { Input } from '@/shared/ui/Input/ui/Input';
import { Link } from '@/shared/ui/Link';
import { useCallback, useState } from 'react';
import styles from './SignInPage.module.scss';
import asset from '@/shared/assets/assets/gatito_paradaA_3.png';

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
    <main>
      <form onSubmit={onSubmit}>
        <div className={styles.signin__container}>
          <div className={styles.signin__title}>Welcome, catlover</div>

          <div className={styles.signin__body}>
            <div className={styles.signin__left__column}>
              <div className={styles.signin__img}>
                <Canvas
                  styles={styles.signin__canvas}
                  name='idle'
                  asset={asset}
                  canvasWidth={450}
                  canvasHeight={450}
                  spriteWidth={450}
                  spriteHeight={450}
                  frameY={0}
                  staggerFrames={14}
                  framesCount={5}
                />
              </div>

              <div className={styles.signin__pet__create}>
                <Link name='signUpLink' href='#' label='I want new' icon={iconLnk} />
              </div>
            </div>

            <div className={styles.signin__right__column}>
              <div>
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
                <Button
                  type='button'
                  name='loginBtn'
                  color='red'
                  text={'Visit my cat'}
                  icon={iconBtn}
                />
              </div>
            </div>
          </div>
          <div className={styles.signin__pet__create__mobile}>
            <Link name='signUpLink' href='#' label='I want new' icon={iconLnk} />
          </div>
        </div>
      </form>
    </main>
  );
};

export { SignInPage };
