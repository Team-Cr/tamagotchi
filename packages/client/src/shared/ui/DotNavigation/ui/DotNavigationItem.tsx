import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  id: string;
  title: string;
};

export const DotNavigationItem: FC<Props> = ({ id, title }) => {
  return (
    <a href={`#${id}`} className={styles['side-nav-link']}>
      <div className={classNames(styles['tooltip'], styles['side-nav-tooltip'])}>
        <div className={styles['side-nav-text']}>{title}</div>
      </div>
    </a>
  );
};
