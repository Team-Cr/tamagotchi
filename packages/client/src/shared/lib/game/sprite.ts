import { Point } from './point';
import { Resources } from './resources';

export class Sprite {
  url: string;
  pos: Point;
  size: [number, number];
  resources: Resources;
  private _offset: [number, number] | null = null;

  constructor(url: string, pos: Point, size: [number, number], resources: Resources) {
    this.resources = resources;
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
    return new Sprite(this.url, this.pos, this.size, this.resources);
  }

  setOffset(offset: [number, number]) {
    this._offset = offset;
  }

  render(ctx: CanvasRenderingContext2D) {
    const x = this.pos.x;
    const y = this.pos.y;

    const image = this.resources.get(this.url);
    if (image) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(
        image,
        x,
        y,
        this.spriteHeight,
        this.spriteWidth,
        this.offset[0],
        this.offset[1],
        this.spriteHeight,
        this.spriteWidth,
      );
    }
  }
}
