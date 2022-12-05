import { queryStringify } from "@/shared/lib/queryStringify";

enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Options = {
  method: Method;
  data?: Record<string, unknown> | FormData;
  timeout?: number;
  headers?: Record<string, string>;
};

type Response<T> = {
  response: T;
  status: number;
  responseHeaders: Record<string, string>;
};
type OptionsWithoutMethod = Omit<Options, 'method'>;

const parseHeaders = (xhr: XMLHttpRequest) => {
  const responseHeaders: Record<string, string> = {};
  xhr
    .getAllResponseHeaders()
    .trim()
    .split(/[\r\n]+/)
    .forEach((line) => {
      const parts = line.split(': ');
      const header = parts.shift() as string;
      const value = parts.join(': ');
      responseHeaders[header] = value;
    });

  return responseHeaders;
};

export class HTTP {
  baseURL: string | undefined = undefined;

  constructor(baseURL?: string) {
    this.baseURL = baseURL;
  }

  addConfig(data: { baseURL?: string }) {
    const { baseURL } = data;

    this.baseURL = baseURL;
  }

  get<T>(url: string, options: OptionsWithoutMethod = {}): Promise<Response<T>> {
    const { data } = options;
    return this._send(data ? `${url}&${queryStringify(data as Record<string, unknown>)}` : url, {
      ...options,
      method: Method.GET,
    });
  }

  post<T>(url: string, options: OptionsWithoutMethod = {}): Promise<Response<T>> {
    return this._send(url, { ...options, method: Method.POST });
  }

  put<T>(url: string, options: OptionsWithoutMethod = {}): Promise<Response<T>> {
    return this._send(url, { ...options, method: Method.PUT });
  }

  delete<T>(url: string, options: OptionsWithoutMethod = {}): Promise<Response<T>> {
    return this._send(url, { ...options, method: Method.DELETE });
  }

  private _send<T>(url: string, options: Options = { method: Method.GET }): Promise<Response<T>> {
    let { headers } = options;
    const { method, data, timeout } = options;

    return new Promise((resolve, reject) => {
      if (headers && Object.keys(headers).length === 0 && !(data instanceof FormData)) {
        headers = {
          'Content-Type': 'application/json',
        };
      }
      let xhrTimeout: NodeJS.Timeout | undefined;
      const xhr = new window.XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.open(method, this.baseURL ? this.baseURL + url : url);

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      xhr.onload = function () {
        if (xhrTimeout) {
          clearTimeout(xhrTimeout);
        }

        let response = xhr.response;

        const responseHeaders: Record<string, string> = parseHeaders(xhr);

        if (response.length > 0 && responseHeaders['content-type'].includes('application/json')) {
          response = JSON.parse(response);
        }

        resolve({
          response,
          status: xhr.status,
          responseHeaders,
        });
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (timeout) {
        xhrTimeout = setTimeout(xhr.abort, timeout);
      }

      if (method === Method.GET || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
