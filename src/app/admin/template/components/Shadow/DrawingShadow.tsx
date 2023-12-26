import { canvasH, canvasW } from "../../Areas/Const";
import { getCtxFont } from "../Text/DrawingText";


export function drawShadow(
  textValue: string,
  textSizeValue: number,
  textWeightValue: number,
  fontValue: string,
  shadowOpacityValue: number,
  shadowAngleValue: number,
  shadowDistanceValue: number,
  shadowColor: string,
  ctx: CanvasRenderingContext2D
): CanvasRenderingContext2D {
  ctx.globalAlpha = shadowOpacityValue;
  ctx.font = getCtxFont(textWeightValue, textSizeValue, fontValue);
  const { shadowX, shadowY } = getShadowPosition(shadowAngleValue, shadowDistanceValue);
  ctx.fillStyle = shadowColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(textValue, shadowX, shadowY);
  return ctx;
}

export function getShadowPosition(
  shadowAngleValue: number,
  shadowDistanceValue: number
) {
  const rad = shadowAngleValue * (Math.PI / 180);
  const d = shadowDistanceValue;
  const shadowX = canvasW/2 + d * Math.cos(rad);
  const shadowY = canvasH/2 + d * Math.sin(rad);
  return { shadowX, shadowY };
}
