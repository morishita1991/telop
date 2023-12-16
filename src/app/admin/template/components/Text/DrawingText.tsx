import { baseX, baseY } from "../../Areas/Const";

export function drawText(
    textValue: string,
    textSizeValue: number,
    textWeightValue: number,
    textOpacityValue: number,
    colorValue: string,
    fontValue: string,
    ctx: CanvasRenderingContext2D
  ): CanvasRenderingContext2D {
    // 不透明度
    ctx.globalAlpha = textOpacityValue;
    // フォント
    ctx.font = getCtxFont(textWeightValue, textSizeValue, fontValue);
    // 色
    ctx.fillStyle = colorValue;
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
