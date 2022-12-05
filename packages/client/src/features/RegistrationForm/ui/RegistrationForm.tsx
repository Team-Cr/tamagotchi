import { FC } from 'react';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Typography } from '@/shared/ui/Typography';
import { Form } from '@/shared/ui/Form';
import { images } from '@/shared/assets';

import styles from './styles.module.scss';

type Props = {
  onSubmit: (values: any) => void;
};

export const RegistrationForm: FC<Props> = ({ onSubmit, ...props }) => {
  return (
    <Form {...props} className={styles.form} onSubmit={onSubmit}>
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
          <Typography color='white' oneLine>Hello, a new Friend</Typography>
          <img src={images.CatPixelImage} alt='cat-pixel-icon' />
        </div>
      </Button>
    </Form>
  );
};
