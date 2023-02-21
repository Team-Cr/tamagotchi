import { FC } from 'react';
import { DotNavigationItem } from './DotNavigationItem';

import styles from './styles.module.scss';

type Props = {
  options: {
    id: string;
    title: string;
  }[];
};

export const DotNavigation: FC<Props> = ({ options }) => {
  return (
    <div className={styles['side-nav']}>
      {options.map((option) => (
        <DotNavigationItem key={option.id} id={option.id} title={option.title} />
      ))}
    </div>
  );
};
