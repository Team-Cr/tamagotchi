import { Sprite } from './sprite';

export enum ObserverTypes {
  create,
  update,
  finish,
}

class Observer {
  obj = {
    [ObserverTypes.create]: [] as (() => void)[],
    [ObserverTypes.update]: [] as (() => void)[],
    [ObserverTypes.finish]: [] as (() => void)[],
  };

  add(o: ObserverTypes, cb: () => void) {
    this.obj[o].push(cb);
  }

  emit(o: ObserverTypes) {
    this.obj[o].forEach((cb) => {
      cb();
    });
  }
}

function* getSpriteGenerator(sprites: Sprite[]) {
  for (const sprite of sprites) {
    yield sprite;
  }
}

export class Animate extends Observer {
  animateTime = 1;
  catSprites: Sprite[] = [];
  _gen: Generator<Sprite, void, unknown> | undefined;

  setSprites(sprites: Sprite[]) {
    this.catSprites = sprites;
    this._gen = getSpriteGenerator(this.catSprites);
  }

  setAnimateTime(animateTime: number) {
    this.animateTime = animateTime;
  }

  resizeImage(ctx: CanvasRenderingContext2D, scaleFactor: number) {
    ctx.scale(scaleFactor, scaleFactor);
  }

  run(canvas: HTMLCanvasElement, scaleFactor?: number) {
    if (!this.catSprites || !this._gen) {
      throw Error('No sprites!');
    }
    let start = 0;

    let sprite = this._gen.next().value;

    const ctx = canvas.getContext('2d');
    if (ctx && scaleFactor) {
      this.resizeImage(ctx, scaleFactor);
    }

    const runWrapper = (time = 0) => {
      if (!this._gen) {
        return;
      }
      const needFrames = (this.animateTime * 1000) / this.catSprites.length;
      const sec = time;
      const delta = sec - start;
      if (delta > needFrames) {
        start = sec;
        let spriteGen = this._gen.next();

        if (spriteGen.done) {
          this.emit(ObserverTypes.finish);
          this._gen = getSpriteGenerator(this.catSprites);
          spriteGen = this._gen.next();
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
