import { isObject } from './isObject';

export const cn = (...args: unknown[]) => {
  return args
    .reduce((acc: string[], arg) => {
      if (typeof arg === 'string') {
        acc.push(arg);
      } else if (isObject(arg)) {
        Object.entries(arg as Record<string, unknown>).forEach(([key, value]) => {
          if (value) {
            acc.push(key);
          }
        });
      }

      return acc;
    }, [])
    .join(' ');
};
