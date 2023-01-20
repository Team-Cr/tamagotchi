import Paw from '@/shared/assets/images/Paw.gif';
import { ComponentProps } from '@/shared/ui/types';
import css from './SpinnerPaw.module.scss';
import { useEffect, useRef, useState } from 'react';

export const SpinnerPaw = (props: ComponentProps) => {
  const textBase = 'Loading';
  const [text, setText] = useState(textBase);
  const dotCounter = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(text + '.');
      dotCounter.current++;

      if (dotCounter.current > 3) {
        dotCounter.current = 0;
        setText(textBase);
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <div>
      <img src={Paw} alt='Loading' {...props} />
      <p className={css.spinner__text}>{text}</p>
    </div>
  );
};
