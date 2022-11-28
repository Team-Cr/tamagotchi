const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return import.meta.env[key] || "";
};

export const BASE_URL = getEnvVar("__BASE_URL__");
