export abstract class BaseRESTService {
  abstract request?: (...args: unknown[]) => Promise<unknown>;
  abstract create?: (...args: unknown[]) => Promise<unknown>;
  abstract update?: (...args: unknown[]) => Promise<unknown>;
  abstract delete?: (...args: unknown[]) => Promise<unknown>;
  abstract find?: (...args: unknown[]) => Promise<unknown>;
}
