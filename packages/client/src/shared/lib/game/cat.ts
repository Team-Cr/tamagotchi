import { assets } from '@/shared/assets';
import { Animate, ObserverTypes } from './animate';
import { Asset } from './asset';
import { Resources } from './resources';

export enum CatConditions {
  Sleep,
  Pending,
}

type AnimateValues = {
  asset: Asset;
  animateTime: number;
};

const chunkSize: [number, number] = [128, 128];

export class ConditionFactory {
  resources: Resources;

  constructor(resources: Resources) {
    this.resources = resources;
  }

  createAsset(assetUrl: string) {
    return new Asset(assetUrl, chunkSize, this.resources);
  }

  getCondition(condition: CatConditions): AnimateValues {
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
  private _catConditions: CatConditions[] | undefined;
  private _currentConditionIndex = 0;

  constructor(resources: Resources) {
    this._animate = new Animate();
    this._conditionFactory = new ConditionFactory(resources);
  }

  _setConditions() {
    if (this._catConditions) {
      const condition = this._conditionFactory.getCondition(
        this._catConditions[this._currentConditionIndex],
      );

      const sprites = condition.asset.crop();
      const animateTime = condition.animateTime;

      this._animate.setSprites(sprites);
      this._animate.setAnimateTime(animateTime);
    }
  }

  setConditions(catConditions: CatConditions | CatConditions[]) {
    const isArray = Array.isArray(catConditions);
    if (isArray) {
      this._animate.add(ObserverTypes.finish, () => {
        this._currentConditionIndex++;
        if (this._currentConditionIndex >= catConditions.length) {
          this._currentConditionIndex = 0;
        }
        this._setConditions();
      });
    }
    this._currentConditionIndex = 0;
    this._catConditions = isArray ? catConditions : [catConditions];
    this._setConditions();
  }

  run(canvas: HTMLCanvasElement, scaleFactor?: number) {
    this._animate.run(canvas, scaleFactor);
  }
}
