export const ResourceAPI = {
  getResource: (path: string) : string => {
    const resource = path[0] === '/' ? path.slice(1) : path;

    return `https://ya-praktikum.tech/api/v2/resources/${resource}`;
  }
};
