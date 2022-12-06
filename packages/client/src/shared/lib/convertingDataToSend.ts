import { camelToSnakeCase } from './camelToSnakeCase';
import { isObject } from './isObject';

export const convertingDataToSend = (data: Record<string, unknown>) => {
  if (!isObject(data)) {
    return data;
  }

  return Object.keys(data).reduce((acc, key) => {
    acc[camelToSnakeCase(key)] = data[key];
    return acc
  }, {} as Record<string, unknown>);
};
