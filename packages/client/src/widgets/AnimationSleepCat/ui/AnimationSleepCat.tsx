import * as React from 'react';

import { CatConditions } from '@/shared/lib/game/cat';
import { cat } from '@/index';

const imageWidth = 423;
const imageHeight = 480;

const canvasScale = 1.8;

export const AnimationSleepCat = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      cat.setCondition(CatConditions.Sleep);
      cat.run(canvasRef.current, canvasScale);
    }
  }, []);

  return <canvas ref={canvasRef} width={imageWidth} height={imageHeight} />;
};
