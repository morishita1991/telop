import React, { useRef, MouseEvent, useContext, useEffect } from 'react';
import { TextInputContext } from "./providers/TextInputProvider";
import { TextSizeRangeBarContext } from './providers/RangeBar/TextSizeRangeBarProvider';
import { TextWeightRangeBarContext } from './providers/RangeBar/TextWeightRangeBarProvider';
import { TextOpacityRangeBarContext } from './providers/RangeBar/TextOpacityRangeBarProvider';
import { TextColorContext } from './providers/TextColorProvider';
import { baseX, baseY, canvasW, canvasH } from '../Areas/Const';
import download from './Download';

export default function Canvas() {
  const { textValue } = useContext(TextInputContext);
  const { colorValue } = useContext(TextColorContext);
  const { rangeValue: textSizeValue } = useContext(TextSizeRangeBarContext);
  const { rangeValue: textWeightValue } = useContext(TextWeightRangeBarContext);
  const { rangeValue: textOpacityValue } = useContext(TextOpacityRangeBarContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onClickEvent = (e: MouseEvent<HTMLButtonElement>) => {
    download(canvasRef.current as HTMLCanvasElement);
  }

  useEffect(() => {
    console.log('fill');
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // 合成ルール
    ctx.globalCompositeOperation = 'source-over';
    // 現在の描画をクリア
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    // 背景を描画
    createBackGroudColor(ctx);
    // テキスト描画
    fillText(textValue, textSizeValue, textWeightValue, textOpacityValue, colorValue, ctx);
  }, [textValue, textSizeValue, textWeightValue, textOpacityValue, colorValue]);

  function fillText(
    textValue: string,
    textSizeValue: number,
    textWeightValue: number,
    textOpacityValue: number,
    colorValue: string,
    ctx: CanvasRenderingContext2D
  ) {
    // 不透明度
    ctx.globalAlpha = textOpacityValue;
    // フォント
    const fontFamily = 'Kosugi';
    ctx.font = `${textWeightValue} ${textSizeValue}px ${fontFamily}`;
    // 色
    ctx.fillStyle = colorValue;
    ctx.fillText(textValue, baseX, baseY);
  }

  function createBackGroudColor(ctx: CanvasRenderingContext2D) {
    if (!ctx) return;
    // 背景色クリア
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.strokeRect(0, 0, canvasW, canvasH);
    const bgColorCheck = document.getElementById('bgColorCheck') as HTMLInputElement;
    if (!bgColorCheck?.checked) {
      return;
    }

    // 背景色描画
    const bgOpacity = (document.getElementById('bgOpacityRange') as HTMLInputElement).value;
    ctx.globalAlpha = Number(bgOpacity);
    ctx.beginPath();
    ctx.fillStyle = (document.getElementById('bg-color') as HTMLInputElement).value;
    ctx.fillRect(0, 0, canvasW, canvasH);
    ctx.strokeRect(0, 0, canvasW, canvasH);
  }

  return (
    <>
      <div className="row">
        <canvas id="canvas" width={canvasW} height={canvasH} ref={canvasRef}></canvas>
      </div>
      <div className="d-flex flex-row ms-3 mt-4">
        <button className="btn btn-primary" id="download" onClick={onClickEvent}>
          画像ダウンロード
        </button>
      </div>
    </>
  );

  // // テキスト
  // const text = document.getElementById('input-text').value;
  // const textColor = document.getElementById('color-text').value;
  // const innerStroke = document.getElementById('stroke-edge-inner-1');
  // const outerStroke = document.getElementById('stroke-edge-outer-1');

  // // フォント
  // ctx.font = Canvas.getfontStyle(ctx);
  // const fontOpacity = document.getElementById('fontOpacityRange').value;
  // const strokeOpacityRange = document.getElementById('strokeOpacityRange1').value;
  // const useStroke = document.getElementById('strokeCheckBox').checked;

  // if (innerStroke.checked) {
  //   // 塗り
  //   ctx.globalAlpha = fontOpacity;
  //   ctx.fillStyle = textColor;
  //   ctx.fillText(text, baseX, baseY);

  //   // ストローク
  //   if (useStroke) {
  //     ctx.globalAlpha = strokeOpacityRange;
  //     ctx = Canvas.drawInnerStroke(ctx);
  //   }
  // }

  // if (outerStroke.checked) {
  //   // ストローク
  //   if (useStroke) {
  //     ctx.globalAlpha = strokeOpacityRange;
  //     ctx = Canvas.drawOuterStroke(ctx);
  //     // 合成ルール設定
  //     ctx.globalCompositeOperation = 'source-over';
  //   }
  //   // 塗り
  //   ctx.globalAlpha = fontOpacity;
  //   ctx.fillStyle = textColor;
  //   ctx.fillText(text, baseX, baseY);
  // }

  // const useShadowCheckBox = document.getElementById('shadowCheckBox').checked;
  // if (useShadowCheckBox) {
  //   // 影は背後に描く
  //   const shadowOpacity = document.getElementById('shadowOpacityRange').value;
  //   ctx.globalAlpha = shadowOpacity; // 不透明度を適用
  //   ctx.globalCompositeOperation = 'destination-over';
  //   ctx.font = Canvas.getShadowFontStyle(ctx);
  //   const shadowColor = document.getElementById('color-shadow').value;
  //   const { shadowX, shadowY } = Shadow.shadowPosition();
  //   ctx.fillStyle = shadowColor;
  //   ctx.fillText(text, shadowX, shadowY);
  // }
}

// export class Canvas {
//   constructor() {
//     // 背景色チェックボックス監視
//     const bgColorCheck = document.getElementById('bgColorCheck');
//     bgColorCheck.addEventListener('change', (e) => {
//       Canvas.createCanvas();
//     });

//     // 色選択を監視
//     const bgColor = document.getElementById('bg-color');
//     bgColor.addEventListener('change', (e) => {
//       const inputBgColor = document.getElementById('input-bg-color');
//       inputBgColor.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputBgColor = document.getElementById('input-bg-color');
//     inputBgColor.addEventListener('change', (e) => {
//       const bgColor = document.getElementById('bg-color');
//       bgColor.value = e.target.value;
//       Canvas.createCanvas();
//     });

//     // 不透明度
//     const bgOpacityRange = document.getElementById('bgOpacityRange');
//     bgOpacityRange.addEventListener('change', (e) => {
//       const bgOpacityRange = document.getElementById('input-bg-opacity');
//       bgOpacityRange.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputBgOpacity = document.getElementById('input-bg-opacity');
//     inputBgOpacity.addEventListener('change', (e) => {
//       const bgOpacityRange = document.getElementById('bgOpacityRange');
//       bgOpacityRange.value = e.target.value;
//       Canvas.createCanvas();
//     });
//   }


//   static drawInnerStroke(ctx = null)
//   {
//     const text = document.getElementById('input-text').value;
//     ctx.lineWidth  = document.getElementById('strokeWidthRange1').value;
//     ctx.strokeStyle = document.getElementById('color-stroke-1').value;
//     // 合成ルール設定
//     const ope = ctx.globalCompositeOperation;
//     ctx.globalCompositeOperation = 'source-atop';
//     ctx.strokeText(text, baseX, baseY);
//     ctx.globalCompositeOperation = ope;
//     return ctx;
//   }

//   static drawOuterStroke(ctx = null)
//   {
//     const text = document.getElementById('input-text').value;
//     ctx.lineWidth  = document.getElementById('strokeWidthRange1').value;
//     ctx.strokeStyle = document.getElementById('color-stroke-1').value;
//     ctx.strokeText(text, baseX, baseY);
//     return ctx;
//   }

//   static getfontStyle(context = null)
//   {
//     if (!context) {
//       return;
//     }
//     const fontSize = document.getElementById('fontSizeRange').value + 'px';
//     let currentFontArr = context.font.split(' ');
//     currentFontArr[0] = fontSize;
//     const currentFont = currentFontArr.join(' ');
//     const fontFamily = document.getElementById('fontFamilyList').value;
//     const fontWeightSelect = document.getElementById('fontWeightRange').value;

//     return fontFamily === '' ? `${fontWeightSelect} ${currentFont}` : `${fontWeightSelect} ${fontSize} ${fontFamily}`;
//   }

//   static getShadowFontStyle(context = null)
//   {
//     if (!context) {
//       return;
//     }
//     const fontSize = document.getElementById('shadowSizeRange').value + 'px'; // 影は別途指定する
//     let currentFontArr = context.font.split(' ');
//     currentFontArr[0] = fontSize;
//     const currentFont = currentFontArr.join(' ');
//     const fontFamily = document.getElementById('fontFamilyList').value;
//     const fontWeightSelect = document.getElementById('fontWeightRange').value;

//     return fontFamily === '' ? `${fontWeightSelect} ${currentFont}` : `${fontWeightSelect} ${fontSize} ${fontFamily}`;
//   }
// }
