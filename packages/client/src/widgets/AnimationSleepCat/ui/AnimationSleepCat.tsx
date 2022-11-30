import * as React from 'react';

import { assets } from '@/shared/assets';

// помогити(
class Asset {
  image: HTMLImageElement;
  sizeOneChunk: [number, number];
  private _assetUrl: string;

  constructor(assetUrl: string, sizeOneChunk: [number, number]) {
    const assetImg = new Resources().get(assetUrl);
    if (!assetImg) {
      throw Error('Image not loaded');
    }
    this.image = assetImg;
    this._assetUrl = assetUrl;
    this.sizeOneChunk = sizeOneChunk;
  }

  get chunkHeight() {
    return this.sizeOneChunk[0];
  }

  get chunkWidth() {
    return this.sizeOneChunk[1];
  }

  get countRows() {
    return this.image.height / this.chunkHeight;
  }

  get countColumns() {
    return this.image.width / this.chunkWidth;
  }

  crop() {
    const sprites = [];
    for (let i = 0; i < this.countRows; i++) {
      for (let j = 0; j < this.countColumns; j++) {
        const position = new Point(j * this.chunkWidth, i * this.chunkHeight);
        const sprite = new Sprite(this._assetUrl, position, this.sizeOneChunk);
        sprites.push(sprite);
      }
    }

    return sprites;
  }

  get chunkCount() {
    return this.countRows * this.countColumns;
  }
}

const imageWidth = 423;
const imageHeight = 469;

class Resources {
  static _instance: Resources;
  resourceCache: Record<string, HTMLImageElement | null> = {};
  loading = [];
  readyCallbacks: (() => void)[] = [];

  constructor() {
    if (Resources._instance) {
      return Resources._instance;
    }

    Resources._instance = this;
    return this;
  }

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

class Point {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }
}

class Sprite {
  url: string;
  pos: Point;
  size: [number, number];
  _offset: [number, number] | null = null;

  constructor(url: string, pos: Point, size: [number, number]) {
    this.url = url;
    this.pos = pos;
    this.size = size;
  }

  get spriteHeight() {
    return this.size[0];
  }

  get spriteWidth() {
    return this.size[1];
  }

  get offset() {
    return this._offset ?? [0, 0];
  }

  clone() {
    return new Sprite(this.url, this.pos, this.size);
  }

  setOffset(offset: [number, number]) {
    this._offset = offset;
  }

  render(ctx: CanvasRenderingContext2D) {
    const x = this.pos.x;
    const y = this.pos.y;

    const image = new Resources().get(this.url);

    if (image) {
      ctx.drawImage(
        image,
        x,
        y,
        this.spriteHeight,
        this.spriteWidth,
        this.offset[0],
        this.offset[1],
        imageHeight,
        imageWidth,
      );
    }
  }
}

function* getSpriteGenerator(sprites: Sprite[]) {
  for (const sprite of sprites) {
    yield sprite;
  }
}

enum CatConditions {
  Sleep,
  Pending,
}

class ConditionFactory {
  getCondition(condition: CatConditions) {
    switch (condition) {
      case CatConditions.Sleep: {
        const asset = new Asset(assets.SleepCatAsset, chunkSize);
        const animateTime = 2.5;
        return new Animate(asset, animateTime);
      }
      default: {
        const asset = new Asset(assets.SleepCatAsset, chunkSize);
        const animateTime = 2.5;
        return new Animate(asset, animateTime);
      }
    }
  }
}

class Cat {
  private _conditionFactory: ConditionFactory;
  private _animate: Animate | undefined;

  constructor() {
    this._conditionFactory = new ConditionFactory();
  }

  setCondition(catCondition: CatConditions) {
    this._animate = this._conditionFactory.getCondition(catCondition);
  }

  run(canvas: HTMLCanvasElement) {
    if (this._animate) {
      this._animate.run(canvas);
    } else {
      throw Error('Need set condition');
    }
  }
}

class Animate {
  asset: Asset;
  animateTime: number;

  constructor(asset: Asset, animateTime: number) {
    this.asset = asset;
    this.animateTime = animateTime;
  }

  run(canvas: HTMLCanvasElement) {
    const catSprites = this.asset.crop();

    let start = 0;
    let gen = getSpriteGenerator(catSprites);

    let sprite = gen.next().value;

    const ctx = canvas.getContext('2d');

    const needFrames = (this.animateTime * 1000) / this.asset.chunkCount;

    const runWrapper = (time = 0) => {
      const sec = time;
      const delta = sec - start;
      if (delta > needFrames) {
        start = sec;
        let spriteGen = gen.next();

        if (spriteGen.done) {
          gen = getSpriteGenerator(catSprites);
          spriteGen = gen.next();
        }
        sprite = spriteGen.value;

        if (sprite && ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          sprite.render(ctx);
        }
      }

      requestAnimationFrame(runWrapper);
    };

    runWrapper();
  }
}

const chunkSize: [number, number] = [128, 128];

export const AnimationSleepCat = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  const onReady = React.useCallback(() => {
    if (canvasRef.current) {
      const cat = new Cat();
      cat.setCondition(CatConditions.Sleep);
      cat.run(canvasRef.current);
    }
  }, []);

  React.useEffect(() => {
    new Resources().load(assets.SleepCatAsset);
    new Resources().onReady(onReady);
  }, [onReady]);

  return <canvas ref={canvasRef} width={imageWidth} height={imageHeight} />;
};
