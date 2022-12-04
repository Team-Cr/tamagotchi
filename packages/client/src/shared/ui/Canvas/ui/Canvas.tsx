import { CanvasHTMLAttributes, useEffect } from 'react';
import { animate } from '../../../lib/animate/animate';

interface CanvasProps extends CanvasHTMLAttributes<HTMLCanvasElement> {
  styles: string;
  name: string;
  asset: string;
  canvasWidth: number;
  canvasHeight: number;
  spriteWidth: number;
  spriteHeight: number;
  frameY: number;
  staggerFrames: number;
  framesCount: number;
}

const Canvas = (props: CanvasProps) => {
  useEffect(() => {
    animate(
      props.name,
      props.asset,
      props.canvasWidth,
      props.canvasHeight,
      props.spriteWidth,
      props.spriteHeight,
      props.frameY,
      props.staggerFrames,
      props.framesCount,
    );
  }, []);

  return (
    <>
      <canvas className={props.styles} {...props} />
    </>
  );
};

export { Canvas };
