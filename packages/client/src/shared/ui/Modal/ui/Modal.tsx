import { FC, KeyboardEventHandler, ReactNode } from 'react'
import styles from "./Modal.module.scss";

export type ModalProps = {
  show: boolean,
  setModalActive(bool: boolean): void,
  children: ReactNode
  title?: string,
}

export const Modal: FC<ModalProps> = (props: ModalProps) => {
  const {
    title = 'Modal',
    setModalActive,
    children,
    show
  } = props;

  const closeOnEsc: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setModalActive(false);
    }
}

  return (
    <div className={`${styles.modal__container} ${show ? styles.active : ""}`}
         role={'button'}
         onKeyUp={closeOnEsc}
         tabIndex={0}
         onClick={() => {
           setModalActive(false)
         }}
    >
      <div
        className={`${styles.modal__body} ${show ? styles.active : ""}`}
        onClick={(e) => e.stopPropagation()}
        role={'button'}
        onKeyUp={closeOnEsc}
        tabIndex={-1}
      >
        <div className={styles.modal__header}>
          <span>{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setModalActive(false)
            }}
            className={styles.modal__close}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {/* Тестовый див. ВАЖНО: Задавай высоту именно нижнего(тестового) дива, а не modal__body */}
        {children}
        <div style={{ minWidth: "20vw"}}>
        </div>
      </div>
    </div>
  )
}
