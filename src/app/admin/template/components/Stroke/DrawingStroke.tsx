import { baseX, baseY, canvasH, canvasW } from "../../Areas/Const";

export function drawOuterStroke(
  textValue: string,
  strokeWidth: number,
  colorValue: string,
  strokeOpacityValue: number,
  ctx: CanvasRenderingContext2D
): CanvasRenderingContext2D
{
    ctx.globalAlpha = strokeOpacityValue;
    ctx.lineWidth  = strokeWidth;
    ctx.strokeStyle = colorValue;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeText(textValue, canvasW/2, canvasH/2);
    return ctx;
}

export function drawInnerStroke(
  textValue: string,
  strokeWidth: number,
  colorValue: string,
  strokeOpacityValue: number,
  ctx: CanvasRenderingContext2D
): CanvasRenderingContext2D
{
  ctx.globalAlpha = strokeOpacityValue;
  ctx.lineWidth  = strokeWidth;
  ctx.strokeStyle = colorValue;
  // 合成ルール設定
  const ope = ctx.globalCompositeOperation;
  ctx.globalCompositeOperation = 'source-atop';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.strokeText(textValue, canvasW/2, canvasH/2);
  ctx.globalCompositeOperation = ope;
  return ctx;
}
