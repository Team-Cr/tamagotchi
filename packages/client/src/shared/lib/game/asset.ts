import { Point } from './point';
import { Resources } from './resources';
import { Sprite } from './sprite';

export class Asset {
  image: HTMLImageElement;
  sizeOneChunk: [number, number];
  resources: Resources;
  private _assetUrl: string;

  constructor(assetUrl: string, sizeOneChunk: [number, number], resources: Resources) {
    this.resources = resources;
    const assetImg = resources.get(assetUrl);
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
        const sprite = new Sprite(this._assetUrl, position, this.sizeOneChunk, this.resources);
        sprites.push(sprite);
      }
    }

    return sprites;
  }

  get chunkCount() {
    return this.countRows * this.countColumns;
  }
}
