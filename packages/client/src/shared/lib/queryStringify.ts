export function queryStringify(data: Record<string, unknown>) {
  if (typeof data !== 'object') {
    throw new Error('Data should be an object');
  }

  const params = Object.entries(data).map(
    ([k, v]) => k + '=' + (v && typeof v === 'object' ? v.toString() : v),
  );
  return params.join('&');
}
