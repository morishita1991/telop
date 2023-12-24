import { baseX, baseY, canvasW, canvasH } from "../../Areas/Const";
import { drawGradation } from "../Gradation/DrawingGradation";

export function drawText(
  textValue: string,
  textSizeValue: number,
  textWeightValue: number,
  textOpacityValue: number,
  colorValue: string,
  fontValue: string,
  gradLeftColor: string,
  gradCenterColor: string,
  gradRightColor: string,
  gradSlideValue: number,
  gradColorPattern: string,
  gradAngleValue: number,
  ctx: CanvasRenderingContext2D
): CanvasRenderingContext2D {
  // 不透明度
  ctx.globalAlpha = textOpacityValue;
  // フォント
  ctx.font = getCtxFont(textWeightValue, textSizeValue, fontValue);

  // 色
  // ctx.fillStyle = colorValue;

  // グラデーション
  ctx = drawGradation(
    textValue, gradLeftColor, gradCenterColor, gradRightColor, gradSlideValue, gradColorPattern, gradAngleValue, ctx
  );

  ctx.fillText(textValue, baseX, baseY);
  return ctx;
}

export function getCtxFont(
  textWeightValue: number,
  textSizeValue: number,
  fontValue: string,
): string {
  return `${textWeightValue} ${textSizeValue}px '${fontValue}'`;
}
