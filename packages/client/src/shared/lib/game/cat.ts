import { assets } from '@/shared/assets';
import { Animate, ObserverTypes } from './animate';
import { Asset } from './asset';
import { Resources } from './resources';

export enum CatConditions {
  Sleep,
  Eat,
  Spin,
  Attack,
  Play,
  Pending,
  Sport
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

  private _createAsset(assetUrl: string) {
    return new Asset(assetUrl, chunkSize, this.resources);
  }

  getCondition(condition: CatConditions): AnimateValues {
    switch (condition) {
      case CatConditions.Attack: {
        const asset = this._createAsset(assets.AttackCatAsset);
        const animateTime = 1;
        return {
          asset,
          animateTime,
        };
      }
      case CatConditions.Sleep: {
        const asset = this._createAsset(assets.SleepCatAsset);
        const animateTime = 2.5;
        return {
          asset,
          animateTime,
        };
      }
      case CatConditions.Play: {
        const asset = this._createAsset(assets.PlayCatAsset);
        const animateTime = 1;
        return {
          asset,
          animateTime,
        };
      }
      case CatConditions.Spin: {
        const asset = this._createAsset(assets.SpinCatAsset);
        const animateTime = 4;
        return {
          asset,
          animateTime,
        };
      }
      case CatConditions.Sport: {
        const asset = this._createAsset(assets.SportCatAsset);
        const animateTime = 1.5;
        return {
          asset,
          animateTime,
        };
      }
      case CatConditions.Eat: {
        const asset = this._createAsset(assets.EatCatAsset);
        const animateTime = 2.5;
        return {
          asset,
          animateTime,
        };
      }
      case CatConditions.Pending: {
        const asset = this._createAsset(assets.PendingCatAsset);
        const animateTime = 0.8;
        return {
          asset,
          animateTime,
        };
      }
      default: {
        const asset = this._createAsset(assets.PendingCatAsset);
        const animateTime = 0.8;
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
  private _defaultConditions: CatConditions[] | undefined;

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

  setDefaultConditions(catConditions: CatConditions | CatConditions[]) {
    this._defaultConditions = Array.isArray(catConditions) ? catConditions : [catConditions];
  }

  cb1() {
    if (this._defaultConditions) {
      this.setConditions(this._defaultConditions);
    }
  }

  setConditions(catConditions: CatConditions | CatConditions[], loop = true) {
    this._animate.remove(ObserverTypes.finish, this.cb1.bind(this));

    const cb = () => {
      this._currentConditionIndex++;
      if (this._currentConditionIndex >= catConditionsArray.length) {
        if (loop) {
          this._currentConditionIndex = 0;
        } else {
          if (this._defaultConditions) {
            this.setConditions(this._defaultConditions);
          }
        }
      }
      this._setConditions();
    };

    const catConditionsArray = Array.isArray(catConditions) ? catConditions : [catConditions];
    this._catConditions = catConditionsArray;
    if (this._catConditions.length > 1) {
      this._animate.add(ObserverTypes.finish, cb);
    } else {
      if (!loop) {
        this._animate.add(ObserverTypes.finish, this.cb1.bind(this));
      }
    }
    this._currentConditionIndex = 0;
    this._setConditions();
  }

  run(canvas: HTMLCanvasElement, scaleFactor?: number) {
    this._animate.run(canvas, scaleFactor);
  }
}
