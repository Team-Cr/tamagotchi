import { ReactNode } from 'react';
import css from './TestComponent.module.scss';

interface TestComponentProps {
  children: ReactNode;
}

export const TestComponent = (props: TestComponentProps) => {
  const { children } = props;

  return <div className={css.testComponent}>{children}</div>;
};
