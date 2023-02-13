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
  Sport,
}

type AnimateValues = {
  asset: Asset;
  animateTime: number;
};

const chunkSize: [number, number] = [128, 128];

export const ConditionsArray: { asset: string; animateTime: number }[] = [
  { asset: assets.SleepCatAsset, animateTime: 2.5 },
  { asset: assets.EatCatAsset, animateTime: 2.5 },
  { asset: assets.SpinCatAsset, animateTime: 4 },
  { asset: assets.AttackCatAsset, animateTime: 1 },
  { asset: assets.PlayCatAsset, animateTime: 1 },
  { asset: assets.PendingCatAsset, animateTime: 0.8 },
  { asset: assets.SportCatAsset, animateTime: 1.5 },
];

export class ConditionFactory {
  resources: Resources;

  constructor(resources: Resources) {
    this.resources = resources;
  }

  private _createAsset(assetUrl: string) {
    return new Asset(assetUrl, chunkSize, this.resources);
  }

  getCondition(condition: CatConditions): AnimateValues {
    try {
      return {
        asset: this._createAsset(ConditionsArray[condition].asset),
        animateTime: ConditionsArray[condition].animateTime,
      };
    } catch {
      return {
        asset: this._createAsset(assets.PendingCatAsset),
        animateTime: 0.8,
      };
    }
  }
}

export class Cat {
  private _conditionFactory: ConditionFactory;
  private _animate: Animate;
  private _catConditions?: CatConditions[];
  private _currentConditionIndex = 0;
  private _defaultConditions?: CatConditions[];

  constructor(resources: Resources) {
    this._animate = new Animate();
    this._conditionFactory = new ConditionFactory(resources);
  }

  _setConditions() {
    if (!this._catConditions) return;

    const condition = this._conditionFactory.getCondition(
      this._catConditions[this._currentConditionIndex],
    );
    const sprites = condition.asset.crop();
    const animateTime = condition.animateTime;
    this._animate.setSprites(sprites);
    this._animate.setAnimateTime(animateTime);
  }

  setDefaultConditions(catConditions: CatConditions | CatConditions[]) {
    this._defaultConditions = Array.isArray(catConditions) ? catConditions : [catConditions];
  }

  defaultCallback() {
    if (this._defaultConditions) {
      this.setConditions(this._defaultConditions);
    }
  }

  setConditions(catConditions: CatConditions | CatConditions[], loop = true) {
    this._animate.remove(ObserverTypes.finish, this.defaultCallback.bind(this));

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
        this._animate.add(ObserverTypes.finish, this.defaultCallback.bind(this));
      }
    }
    this._currentConditionIndex = 0;
    this._setConditions();
  }

  run(canvas: HTMLCanvasElement, scaleFactor?: number) {
    this._animate.run(canvas, scaleFactor);
  }
}
