import BackSvg from '@/shared/assets/images/arrow.svg';
import css from './ArrowBack.module.scss';

export interface ArrowBackProps {
  backTo?: string;
}

// TODO add Link and typing by routes
export const ArrowBack = (props: ArrowBackProps) => {
  const { backTo = '#' } = props;

  return (
    <a className={css.arrow} href={backTo}>
      <BackSvg />
    </a>
  );
};
