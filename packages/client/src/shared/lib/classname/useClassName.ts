import { useCallback } from 'react'
import { addPrefix } from '@/shared/lib/classname/addPrefix'
import classNames from 'classnames'

export type ClassValue =
  | string
  | number
  | ClassDictionary
  | ClassArray
  | undefined
  | null
  | boolean;

export interface ClassArray extends Array<ClassValue> {} //eslint-disable-line @typescript-eslint/no-empty-interface

export interface ClassDictionary {
  [id: string]: unknown;
}

export function useClassNames(str: string, module?: CSSModuleClasses) {
  /**
   * @example
   *
   * if str = 'button':
   * prefix('red', { active: true }) => 'button-red button-active'
   */
  const prefix = useCallback(
    (...classes: ClassValue[]) => {
      const mergeClasses = classes.length
        ? classNames(...classes)
          .split(' ')
          .map(item => {
            const className = addPrefix(str, item);

            if (!module) {
              return className;
            }

            return module[className] ?? className;
          })
        : [];

      return mergeClasses.filter(cls => cls).join(' ');
    },
    [module, str]
  );

  /**
   * @example
   *
   * if str = 'button':
   * withClassPrefix('red', { active: true }) => 'button button-red button-active'
   */
  const withClassPrefix = useCallback(
    (...classes: ClassValue[]) => {
      const mergeClasses = prefix(classes);
      const baseStyle = module ? module[str] : str;
      return mergeClasses ? `${baseStyle} ${mergeClasses}` : baseStyle;
    },
    [prefix, module, str]
  );

  return {
    withClassPrefix,
    merge: classNames,
    prefix
  };
}
