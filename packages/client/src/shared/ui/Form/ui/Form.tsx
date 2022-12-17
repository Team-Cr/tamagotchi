import { FC, useRef, useCallback, DetailedHTMLProps, FormHTMLAttributes, PropsWithChildren } from 'react';
import { getFormValues } from '@/shared/lib/getFormValues';

export type OnSubmitType<T = unknown> = (values: T) => void;

type Props = Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: OnSubmitType;
};

export const Form: FC<PropsWithChildren<Props>> = ({
  onSubmit,
  children,
  ...props
}) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmitHandler = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (formRef.current) {
        const values = getFormValues(formRef.current);
        onSubmit && onSubmit(values);
        formRef.current.reset();
      }
    },
    [onSubmit],
  );

  return (
      <form onSubmit={onSubmitHandler} ref={formRef} {...props}>
        {children}
      </form>
  );
};
