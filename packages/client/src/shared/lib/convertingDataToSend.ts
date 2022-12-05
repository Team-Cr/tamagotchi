import { camelToSnakeCase } from './camelToSnakeCase';
import { isObject } from './isObject';

export const convertingDataToSend = (data: Record<string, unknown>) => {
  if (isObject(data)) {
    const typedData = data;
    const result: Record<string, unknown> = {};
    Object.keys(typedData).forEach((key) => {
      result[camelToSnakeCase(key)] = typedData[key];
    });

    return result;
  }

  return data;
};
