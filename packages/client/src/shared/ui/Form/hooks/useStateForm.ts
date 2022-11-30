import * as React from 'react';
import { FormContext } from '../contexts/Context';

export const useStateForm = () => {
  const data = React.useContext(FormContext);

  return data;
};
