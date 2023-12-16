import { canvasW, canvasH } from '../../Areas/Const';

export default function createBackGroudColor(
    bgColorValue: string,
    bgOpacityValue: number,
    ctx: CanvasRenderingContext2D
  ): CanvasRenderingContext2D {
    if (!ctx) {
      return ctx;
    }
    // 背景色クリア
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.strokeRect(0, 0, canvasW, canvasH);

    // 背景色描画
    ctx.globalAlpha = Number(bgOpacityValue);
    ctx.beginPath();
    ctx.fillStyle = bgColorValue;
    ctx.fillRect(0, 0, canvasW, canvasH);
    ctx.strokeRect(0, 0, canvasW, canvasH);
    return ctx;
  }
