import { FC, useRef, useCallback, useEffect } from 'react';

import { Cat, CatConditions } from '@/shared/lib/game/cat';
import { Resources } from '@/shared/lib/game/resources';
import { assets } from '@/shared/assets';
import { useAppDispatch } from '@/shared/lib/redux';
import { setRef } from '@/entities/animationRef';

const imageWidth = 423;
const imageHeight = 480;

const canvasScale = 3;

class Builder {
  assets: string[] = [];
  conditions: CatConditions[] = [];

  add(condition: CatConditions) {
    switch (condition) {
      case CatConditions.Sleep: {
        this.assets.push(assets.SleepCatAsset);
        break;
      }
      case CatConditions.Attack: {
        this.assets.push(assets.AttackCatAsset);
        break;
      }
      case CatConditions.Play: {
        this.assets.push(assets.PlayCatAsset);
        break;
      }
      case CatConditions.Sport: {
        this.assets.push(assets.SportCatAsset);
        break;
      }
      case CatConditions.Eat: {
        this.assets.push(assets.EatCatAsset);
        break;
      }
      case CatConditions.Spin: {
        this.assets.push(assets.SpinCatAsset);
        break;
      }
      case CatConditions.Pending: {
        this.assets.push(assets.PendingCatAsset);
        break;
      }
      default: {
        return this;
      }
    }

    this.conditions.push(condition);
    return this;
  }

  create(): [string[], CatConditions[]] {
    return [this.assets, this.conditions];
  }
}

type Props = {
  imageWidth: number;
  imageHeight: number;
  canvasScale?: number;
};

const AnimateCanvas: FC<Props> = ({ imageWidth, imageHeight, canvasScale = 1 }) => {
  const dispatch = useAppDispatch();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isRender = useRef(false);
  const catRef = useRef<Cat | null>(null);
  const resRef = useRef<Resources | null>(null);

  const renderApp = useCallback(() => {
    if (canvasRef.current && resRef.current) {
      const cat = new Cat(resRef.current);
      catRef.current = cat;
      dispatch(setRef(catRef.current));
      cat.setConditions(CatConditions.Pending);
      cat.setDefaultConditions(CatConditions.Pending);
      cat.run(canvasRef.current, canvasScale);
    }
  }, [canvasScale]);


  useEffect(() => {
    if (!isRender.current) {
      isRender.current = true;
      resRef.current = new Resources();
      const builder = new Builder();
      [
        CatConditions.Sleep,
        CatConditions.Eat,
        CatConditions.Spin,
        CatConditions.Attack,
        CatConditions.Sport,
        CatConditions.Pending,
        CatConditions.Play,
      ].forEach((condition) => {
        builder.add(condition);
      });

      const [assets] = builder.create();
      resRef.current.onReady(renderApp);
      resRef.current.load(assets);
    }
  }, [renderApp]);

  return (
    <>
      <canvas ref={canvasRef} width={imageWidth} height={imageHeight} />
    </>
  );
};

export const AnimationSleepCat = () => {
  return (
    <AnimateCanvas imageWidth={imageWidth} imageHeight={imageHeight} canvasScale={canvasScale} />
  );
};
