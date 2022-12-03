const RESOURCES_URL = 'https://ya-praktikum.tech/api/v2/resources';

export const ResourceAPI = {
  getResource: (path: string): string => {
    const resource = path[0] === '/' ? path.slice(1) : path;

    return `${RESOURCES_URL}/${resource}`;
  },
};
