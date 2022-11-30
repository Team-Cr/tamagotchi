import * as React from 'react';
import { getFormValues } from '@/shared/utils/getFormValues';
import { FormContext } from '../contexts/Context';

export type OnSubmitType = (values: unknown) => void;

type Props = Omit<
  React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: OnSubmitType;
};

export const Form: React.FC<React.PropsWithChildren<Props>> = ({
  onSubmit,
  children,
  ...props
}) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [values, setValues] = React.useState({});

  const onSubmitHandler = React.useCallback(
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

  const onChangeFormHandler = React.useCallback(() => {
    setValues(getFormValues(formRef.current));
  }, []);

  return (
    <FormContext.Provider
      value={{
        values,
        form: formRef.current,
      }}
    >
      <form onChange={onChangeFormHandler} onSubmit={onSubmitHandler} ref={formRef} {...props}>
        {children}
      </form>
    </FormContext.Provider>
  );
};
