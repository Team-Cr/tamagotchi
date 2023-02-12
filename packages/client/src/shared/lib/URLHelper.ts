export class URLHelper {
  static buildUrl(url: string, params: { [x: string]: string | number }) {
    Object.keys(params).forEach((key) => {
      url = url.replace(new RegExp(`{${key}}`, 'g'), `${params[key]}`);
    });
    return url;
  }
}
