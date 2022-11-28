import classNames from 'classnames'

export function addPrefix(pre: string, className: string | string[], delimiter = '-'): string {

  if (!pre || !className) {
    return '';
  }

  if (pre.charAt(pre.length - 1) === delimiter) {
    pre = pre.slice(0,-1)
  }

  if (Array.isArray(className)) {
    return classNames(className.filter(name => !!name).map(name => pre + delimiter + name));
  }

  return pre + delimiter + className;
}
