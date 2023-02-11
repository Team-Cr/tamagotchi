import css from './Loader.module.scss';
import Paw from '@/shared/assets/images/Paw.gif';

export const Loader = () => {
  return (
    <span className={css.loader}>
      <img src={Paw} alt='Loading' width={100} height={100} />
    </span>
  );
};
