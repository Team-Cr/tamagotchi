import * as React from 'react';

import styles from './styles.module.scss';

type Props = Record<string, never>;

export const FormButton: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
