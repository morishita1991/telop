import { baseX, baseY, canvasW, canvasH } from "../../Areas/Const";

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
    // ctx.fillStyle = colorValue;

    // グラデーション(実験)
    const metrics = ctx.measureText(textValue);
    const textWidth = metrics.width;
    const textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
    const startX = baseX - Math.abs( metrics.actualBoundingBoxLeft )
    const startY = baseY - metrics.actualBoundingBoxAscent
    const endX = startX + textWidth;
    const endY = startY + textHeight;

    let lineargrad = ctx.createLinearGradient(startX, startY, endX, endY);
    lineargrad.addColorStop(0, 'green');
    lineargrad.addColorStop(0.2, 'white');
    lineargrad.addColorStop(1, 'red');
    ctx.fillStyle = lineargrad;


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
