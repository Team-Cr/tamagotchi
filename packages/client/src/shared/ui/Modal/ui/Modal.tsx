import CrossSvg from '@/shared/assets/images/cross.svg';
import classNames from 'classnames';
import { FC, KeyboardEventHandler, MouseEventHandler, ReactNode, useCallback } from 'react';
import css from './Modal.module.scss';

export type ModalProps = {
  isActive: boolean;
  setIsActive(bool: boolean): void;
  isCloseButtonShown?: boolean;
  children: ReactNode;
  title?: string;
};

export const Modal: FC<ModalProps> = (props: ModalProps) => {
  const { title = 'Modal', setIsActive, children, isActive, isCloseButtonShown = true } = props;

  const closeModal = useCallback(() => {
    setIsActive(false);
  }, [setIsActive]);

  const closeOnEsc: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
    },
    [closeModal],
  );

  const stopClickPropagation: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => e.stopPropagation(),
    [],
  );

  return (
    <div
      className={classNames(css.modal__container, { [css.active]: isActive })}
      role={'button'}
      onKeyUp={closeOnEsc}
      tabIndex={0}
      onClick={closeModal}
    >
      <div
        className={classNames(css.modal__body, { [css.active]: isActive })}
        onClick={stopClickPropagation}
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
