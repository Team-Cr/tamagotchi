import { assets } from '@/shared/assets';
import { Animate } from './animate';
import { Asset } from './asset';
import { Resources } from './resources';

export enum CatConditions {
  Sleep,
  Pending,
}

const chunkSize: [number, number] = [128, 128];

class ConditionFactory {
  resources: Resources;

  constructor(resources: Resources) {
    this.resources = resources;
  }

  createAsset(assetUrl: string) {
    return new Asset(assetUrl, chunkSize, this.resources);
  }

  getCondition(condition: CatConditions) {
    switch (condition) {
      case CatConditions.Sleep: {
        const asset = this.createAsset(assets.SleepCatAsset);
        const animateTime = 2.5;
        return {
          asset,
          animateTime,
        };
      }
      default: {
        const asset = this.createAsset(assets.SleepCatBlackAsset);
        const animateTime = 2.5;
        return {
          asset,
          animateTime,
        };
      }
    }
  }
}

export class Cat {
  private _conditionFactory: ConditionFactory;
  private _animate: Animate;

  constructor(resources: Resources) {
    this._animate = new Animate();
    this._conditionFactory = new ConditionFactory(resources);
  }

  setCondition(catCondition: CatConditions) {
    const data = this._conditionFactory.getCondition(catCondition);
    if (this._animate) {
      this._animate.setAsset(data.asset);
      this._animate.setAnimateTime(data.animateTime);
    }
  }

  run(canvas: HTMLCanvasElement, scaleFactor?: number, loop?: boolean) {
    this._animate.run(canvas, scaleFactor, loop);
  }
}
