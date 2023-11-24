import { baseX, baseY } from "../../Areas/Const";

export default function fillText(
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
    ctx.font = `${textWeightValue} ${textSizeValue}px '${fontValue}'`;
    // 色
    ctx.fillStyle = colorValue;
    ctx.fillText(textValue, baseX, baseY);
    return ctx;
  }
