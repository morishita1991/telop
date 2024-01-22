import { canvasW, canvasH } from '../../Areas/Const';

export function createBackGroudColor(
    bgColorValue: string,
    bgOpacityValue: number,
    backgroundActivate: boolean,
    ctx: CanvasRenderingContext2D
  ): CanvasRenderingContext2D {
    if (!ctx) {
      return ctx;
    }
    ctx = clearBackGround(ctx);
    if (backgroundActivate)
    {
      // 背景色描画
      ctx.globalAlpha = Number(bgOpacityValue);
      ctx.beginPath();
      ctx.fillStyle = bgColorValue;
      ctx.fillRect(0, 0, canvasW, canvasH);
      ctx.strokeRect(0, 0, canvasW, canvasH);
    }
    return ctx;
}

export function clearBackGround(
  ctx: CanvasRenderingContext2D
): CanvasRenderingContext2D
{
  // 背景色クリア
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000000';
  ctx.clearRect(0, 0, canvasW, canvasH);
  ctx.strokeRect(0, 0, canvasW, canvasH);
  return ctx;
}
