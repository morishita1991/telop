import { baseX, baseY } from "../../Areas/Const";

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
    ctx.strokeText(textValue, baseX, baseY);
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
  ctx.strokeText(textValue, baseX, baseY);
  ctx.globalCompositeOperation = ope;
  return ctx;
}
