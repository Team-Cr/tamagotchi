import CrossSvg from '@/shared/assets/images/cross.svg';
import { FC, KeyboardEventHandler, ReactNode } from 'react';
import css from './Modal.module.scss';

export type ModalProps = {
  show: boolean;
  setModalActive(bool: boolean): void;
  isCloseButtonShown?: boolean;
  children: ReactNode;
  title?: string;
};

export const Modal: FC<ModalProps> = (props: ModalProps) => {
  const {
    title = 'Modal',
    setModalActive,
    children,
    show,
    isCloseButtonShown = true,
  } = props;

  const closeOnEsc: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setModalActive(false);
    }
  };

  return (
    <div
      className={`${css.modal__container} ${show ? css.active : ''}`}
      role={'button'}
      onKeyUp={closeOnEsc}
      tabIndex={0}
      onClick={() => {
        setModalActive(false);
      }}
    >
      <div
        className={`${css.modal__body} ${show ? css.active : ''}`}
        onClick={(e) => e.stopPropagation()}
        role={'button'}
        onKeyUp={closeOnEsc}
        tabIndex={-1}
      >
        <div className={css.modal__header}>
          <span>{title}</span>
          {isCloseButtonShown && (
            <div className={css.modal__close}>
              <CrossSvg />
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
