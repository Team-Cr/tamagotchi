import CrossSvg from '@/shared/assets/images/cross.svg';
import classNames from 'classnames';
import { FC, KeyboardEventHandler, ReactNode, useCallback } from 'react';
import css from './Modal.module.scss';

export type ModalProps = {
  show: boolean;
  setModalActive(bool: boolean): void;
  isCloseButtonShown?: boolean;
  children: ReactNode;
  title?: string;
  isClosable?: boolean;
};

export const Modal: FC<ModalProps> = (props: ModalProps) => {
  const {
    title = 'Modal',
    setModalActive,
    children,
    show,
    isCloseButtonShown = true,
    isClosable = true,
  } = props;

  const closeModal = useCallback(() => {
    if (isClosable) {
      setModalActive(false);
    }
  }, [isClosable, setModalActive]);

  const closeOnEsc: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
    },
    [closeModal],
  );

  return (
    <div
      className={classNames(css.modal__container, { [css.active]: show })}
      role={'button'}
      onKeyUp={closeOnEsc}
      tabIndex={0}
      onClick={closeModal}
    >
      <div
        className={classNames(css.modal__body, { [css.active]: show })}
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
