let frameX = 0;
let gameFrame = 0;

/**
 * function creates animation from png
 * @param {string} asset
 * @param {number} canvasWidth
 * @param {number} canvasHeight
 * @param {number} spriteWidth - width of one sprite
 * @param {number} spriteHeight - height of one sprite
 * @param {number} frameY - the line number of the png file to create the animation
 * @param {number} staggerFrames - sets the animation speed (lower value means faster speed)
 * @param {number} framesCount - number of frames in png
 */
export function animate(
  name: string,
  asset: string,
  canvasWidth: number,
  canvasHeight: number,
  spriteWidth: number,
  spriteHeight: number,
  frameY: number,
  staggerFrames: number,
  framesCount: number,
) {
  const canvas: any = document.getElementsByName(name)[0];

  const image = new Image();
  image.src = asset;

  const ctx = canvas.getContext('2d');

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  const position = Math.floor(gameFrame / staggerFrames) % framesCount;

  frameX = spriteWidth * position;

  ctx.drawImage(
    image,
    frameX,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    canvasWidth,
    canvasHeight,
  );
  gameFrame++;

  requestAnimationFrame(() =>
    animate(
      name,
      asset,
      canvasWidth,
      canvasHeight,
      spriteWidth,
      spriteHeight,
      frameY,
      staggerFrames,
      framesCount,
    ),
  );
}
