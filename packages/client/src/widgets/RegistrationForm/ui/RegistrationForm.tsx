import * as React from 'react';

import { RegFormType } from '@/shared/hooks/useAuth';
import { FormButton } from '@/shared/ui/FormButton';
import { Input } from '@/shared/ui/Input';
import { Typography } from '@/shared/ui/Typography';
import { Form } from '@/shared/ui/Form';
import { images } from '@/shared/assets';

import styles from './styles.module.scss';

type Props = {
  onSubmit: (values: RegFormType) => void;
};

export const RegistrationForm: React.FC<Props> = ({ onSubmit, ...props }) => {
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
      <FormButton>
        <div className={styles['form__btn-wrapper']}>
          <Typography color='white'>Hello, a new Friend</Typography>
          <img src={images.CatPixelImage} alt='cat-pixel-icon' />
        </div>
      </FormButton>
    </Form>
  );
};
