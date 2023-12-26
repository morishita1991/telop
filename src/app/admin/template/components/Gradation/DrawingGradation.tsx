import { baseX, baseY, canvasW, canvasH } from "../../Areas/Const";

export function drawGradation(
  textValue: string,
  gradLeftColor: string,
  gradCenterColor: string,
  gradRightColor: string,
  gradSlideValue: number,
  gradColorPattern: string,
  gradAngleValue: number,
  ctx: CanvasRenderingContext2D
): CanvasRenderingContext2D {

  let lineargrad = SetGradationPosition(textValue, gradAngleValue, ctx);
  lineargrad.addColorStop(0, gradLeftColor);
  lineargrad.addColorStop(
    gradSlideValue,
    gradColorPattern === 'three' ? gradCenterColor : gradLeftColor
  );
  lineargrad.addColorStop(1, gradRightColor);
  ctx.fillStyle = lineargrad;
  return ctx;
}

export function SetGradationPosition(
  textValue: string,
  gradAngleValue: number,
  ctx: CanvasRenderingContext2D
): CanvasGradient
{
  const metrics = ctx.measureText(textValue);
  const textWidth = metrics.width;
  const textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

  let startX: number;
  let startY: number;
  let endX: number;
  let endY: number;

  // gradAngleを左右反転した状態でスタートする(-180度の位置から開始)
  const rad = (gradAngleValue - 180) * (Math.PI / 180);

  const θ = Math.atan2(textHeight, textWidth);
  const rad1 = - Math.PI + θ; // 矩形左下
  const rad2 = - θ; // 矩形右下
  const rad3 = θ; // 右上
  const rad4 = Math.PI - θ; // 左上

  // テキストエリアの左上の座標
  const sx = canvasW/2 - Math.abs(metrics.actualBoundingBoxLeft);
  const sy = canvasH/2 - metrics.actualBoundingBoxAscent;

  if (( - Math.PI <= rad && rad < rad1) || (rad4 <= rad && rad <= Math.PI))
  {
    // 左端
    startX = sx;
    endX = sx + textWidth;
    const vy = textHeight / (2 * Math.PI + rad1 - rad4); // 1角度あたりy方向の移動速度
    let dy: number;
    if (rad4 <= rad)
    {
      // 第2象限 後半
      dy = vy * (rad - rad4); // yの増加分
    } else {
      // 第3象限 前半
      dy = vy * (2*Math.PI + rad - rad4); // yの増加分
    }
    startY = sy + dy;
    endY = sy + textHeight - dy;
    console.log(startX, startY, endX, endY);
  }
  else if (rad1 <= rad && rad < rad2)
  {
    // 下端
    startY = sy + textHeight;
    endY = sy;
    const vx = textWidth / (rad2 - rad1); // 1角度あたりx方向の移動速度
    const dx = vx * (rad - rad1); // xの増加分
    startX = sx + dx;
    endX = sx + textWidth - dx;
  }
  else if (rad2 <= rad && rad < rad3)
  {
    // 右端
    startX = sx + textWidth;
    endX = sx;
    const vy = textHeight / (rad3 - rad2); // 1角度あたりy方向の移動速度
    const dy = vy * (rad - rad2); // yの増加分
    startY = sy + textHeight - dy;
    endY = sy + dy;
  }
  else if (rad3 <= rad && rad < rad4)
  {
    // 上端
    startY = sy;
    endY = sy + textHeight;
    const vx = textWidth / (rad4 - rad3); // 1角度あたりx方向の移動速度
    const dx = vx * (rad - rad3); // xの増加分
    startX = sx + textWidth - dx;
    endX = sx + dx;
  }
  else {
    throw new Error("Rad value is Invalid");
  }

  return ctx.createLinearGradient(startX, startY, endX, endY);
}
