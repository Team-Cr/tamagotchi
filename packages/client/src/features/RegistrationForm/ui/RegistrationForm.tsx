import { FC, DetailedHTMLProps, FormHTMLAttributes } from 'react';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Typography } from '@/shared/ui/Typography';
import { Form } from '@/shared/ui/Form';
import { images } from '@/shared/assets/images';

import styles from './styles.module.scss';
import { useAppDispatch } from '@/shared/lib/redux';
import { AuthThunk } from '@/processes/auth/api';
import { SignUpData } from '@/shared/lib/api';

type Props = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export const RegistrationForm: FC<Props> = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const onSubmitHandler = (values: unknown) => {
    dispatch(AuthThunk.signUp(values as SignUpData));
  };

  return (
    <Form {...props} className={styles.form} onSubmit={onSubmitHandler}>
      <div className={styles.form__fields}>
        <Input placeholder='Name' type='text' name='first_name' />
        <Input placeholder='Surname' type='text' name='second_name' />
        <Input placeholder='Email' type='text' name='email' />
        <Input placeholder='Phone number' type='number' name='phone' />
        <Input placeholder='Login' type='text' name='login' />
        <Input placeholder='Password' type='password' name='password' />
      </div>
      <Button type={'submit'} className={styles.form__btn}>
        <div className={styles['form__btn-wrapper']}>
          <Typography color='white' oneLine>
            Hello, a new Friend
          </Typography>
          <img src={images.CatPixelImage} alt='cat-pixel-icon' />
        </div>
      </Button>
    </Form>
  );
};
