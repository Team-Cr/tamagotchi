import { FC, DetailedHTMLProps, FormHTMLAttributes } from 'react';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Typography } from '@/shared/ui/Typography';
import { Form } from '@/shared/ui/Form';
import { images } from '@/shared/assets/images';
import { RegFormType, useAuth } from '@/shared/hooks/useAuth';

import styles from './styles.module.scss';

type Props = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export const RegistrationForm: FC<Props> = ({ ...props }) => {
  const { registerUser } = useAuth();

  const onSubmitHandler = (values: unknown) => {
    registerUser(values as RegFormType);
  };

  return (
    <Form {...props} className={styles.form} onSubmit={onSubmitHandler}>
      <div className={styles.form__fields}>
        <Input placeholder='Name' name='firstName' />
        <Input placeholder='Surname' name='secondName' />
        <Input placeholder='Email' type='email' name='email' />
        <Input placeholder='Phone number' name='phone' />
        <Input placeholder='Login' name='login' />
        <Input placeholder='Password' type='password' name='password' />
      </div>
      <Button className={styles.form__btn} type="submit">
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
