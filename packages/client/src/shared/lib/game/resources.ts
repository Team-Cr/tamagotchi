export class Resources {
  resourceCache: Record<string, HTMLImageElement | null> = {};
  loading = [];
  readyCallbacks: (() => void)[] = [];

  load(urlOrArr: string | string[]) {
    if (urlOrArr instanceof Array) {
      urlOrArr.forEach((url) => {
        this._load(url);
      });
    } else {
      this._load(urlOrArr);
    }
  }

  _load(url: string) {
    if (this.resourceCache[url]) {
      return this.resourceCache[url];
    } else {
      const img = new Image();
      img.onload = () => {
        this.resourceCache[url] = img;

        if (this.ready()) {
          this.readyCallbacks.forEach((func) => {
            func();
          });
        }
      };
      this.resourceCache[url] = null;
      img.src = url;
    }
  }

  get(url: string) {
    return this.resourceCache[url];
  }

  ready() {
    let ready = true;
    for (const k in this.resourceCache) {
      if (Object.prototype.hasOwnProperty.call(this.resourceCache, k) && !this.resourceCache[k]) {
        ready = false;
      }
    }
    return ready;
  }

  onReady(func: () => void) {
    this.readyCallbacks.push(func);
  }
}
