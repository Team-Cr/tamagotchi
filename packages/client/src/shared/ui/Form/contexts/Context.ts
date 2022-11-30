import * as React from 'react';

type ValuesType = Record<string, unknown>;

type ContextType = {
  values: ValuesType;
  form: HTMLFormElement | null;
};

export const FormContext = React.createContext<ContextType>({
  values: {},
  form: null,
});
