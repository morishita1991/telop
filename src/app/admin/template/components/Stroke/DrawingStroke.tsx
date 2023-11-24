import { baseX, baseY } from "../../Areas/Const";

export default function drawOuterStroke(
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
