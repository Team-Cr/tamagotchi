import { Asset } from './asset';
import { Sprite } from './sprite';

function* getSpriteGenerator(sprites: Sprite[]) {
  for (const sprite of sprites) {
    yield sprite;
  }
}

export class Animate {
  asset: Asset | null = null;
  animateTime = 1;
  catSprites: Sprite[] = [];

  setAsset(asset: Asset) {
    this.asset = asset;
    this.catSprites = this.asset.crop();
  }

  setAnimateTime(animateTime: number) {
    this.animateTime = animateTime;
  }

  resizeImage(ctx: CanvasRenderingContext2D, scaleFactor: number) {
    ctx.scale(scaleFactor, scaleFactor);
  }

  run(canvas: HTMLCanvasElement, scaleFactor?: number, loop = true) {
    if (!this.asset) {
      throw Error('No asset!');
    }
    let start = 0;
    let gen = getSpriteGenerator(this.catSprites);

    let sprite = gen.next().value;

    const ctx = canvas.getContext('2d');
    if (ctx && scaleFactor) {
      this.resizeImage(ctx, scaleFactor);
    }

    const needFrames = (this.animateTime * 1000) / this.asset.chunkCount;

    const runWrapper = (time = 0) => {
      const sec = time;
      const delta = sec - start;
      if (delta > needFrames) {
        start = sec;
        let spriteGen = gen.next();

        if (spriteGen.done && loop) {
          gen = getSpriteGenerator(this.catSprites);
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
