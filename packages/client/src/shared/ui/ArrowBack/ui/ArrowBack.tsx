import BackSvg from '@/shared/assets/images/arrow.svg';
import classNames from 'classnames';
import css from './ArrowBack.module.scss';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
export interface ArrowBackProps {
  backTo?: string;
  className?: string;
}

// TODO add Link and typing by routes
export const ArrowBack = (props: ArrowBackProps) => {
  const { className = '' } = props;
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <button className={classNames(css.arrow, className)} onClick={handleClick}>
      <BackSvg />
    </button>
  );
};
