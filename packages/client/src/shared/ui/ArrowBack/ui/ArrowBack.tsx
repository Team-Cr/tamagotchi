import BackSvg from '@/shared/assets/images/arrow.svg';
import classNames from 'classnames';
import css from './ArrowBack.module.scss';

export interface ArrowBackProps {
  backTo?: string;
  className?: string;
}

// TODO add Link and typing by routes
export const ArrowBack = (props: ArrowBackProps) => {
  const { backTo = '#', className = '' } = props;

  return (
    <a className={classNames(css.arrow, className)} href={backTo}>
      <BackSvg />
    </a>
  );
};
