import React, { useRef, MouseEvent, useContext, useEffect } from 'react';
import { TextInputContext } from "./providers/Text/TextInputProvider";
import { TextSizeRangeBarContext } from './providers/Text/TextSizeRangeBarProvider';
import { TextWeightRangeBarContext } from './providers/Text/TextWeightRangeBarProvider';
import { TextOpacityRangeBarContext } from './providers/Text/TextOpacityRangeBarProvider';
import { TextColorContext } from './providers/Text/TextColorProvider';
import { TextFontContext } from './providers/Text/TextFontProvider';
import { canvasW, canvasH } from '../Areas/Const';
import download from './Download';
import fillText from './Text/DrawingText';
import { drawOuterStroke, drawInnerStroke } from './Stroke/DrawingStroke';
import createBackGroudColor from './BackGround/BackGroundColor';
import { BackGroundColorContext } from './providers/BackGround/BackGroundColorProvider';
import { BackGroundOpacityRangeBarContext } from './providers/BackGround/BackGroundOpacityRangeBarProvider';
import { BackGroundCheckBoxContext } from './providers/BackGround/BackGroundCheckBoxProvider';
import { StrokeColorContext } from './providers/Stroke/StrokeColorProvider';
import { StrokeWidthRangeBarContext } from './providers/Stroke/StrokeWidthRangeBarProvider';
import { StrokeOpacityRangeBarContext } from './providers/Stroke/StrokeOpacityRangeBarProvider';
import { StrokeEdgeRadioButtonContext } from './providers/Stroke/StrokeEdgeRadioButtonProvider';

export default function Canvas() {
  const { textValue } = useContext(TextInputContext);
  const { colorValue: textColor } = useContext(TextColorContext);
  const { fontValue } = useContext(TextFontContext);
  const { bgColorValue } = useContext(BackGroundColorContext);
  const { rangeValue: textSizeValue } = useContext(TextSizeRangeBarContext);
  const { rangeValue: textWeightValue } = useContext(TextWeightRangeBarContext);
  const { rangeValue: textOpacityValue } = useContext(TextOpacityRangeBarContext);
  const { rangeValue: bgOpacityValue } = useContext(BackGroundOpacityRangeBarContext);
  const { isChecked: bgChecked } = useContext(BackGroundCheckBoxContext);
  const { colorValue: strokeColor } = useContext(StrokeColorContext);
  const { rangeValue: strokeWidthValue } = useContext(StrokeWidthRangeBarContext);
  const { rangeValue: strokeOpacityValue } = useContext(StrokeOpacityRangeBarContext);
  const { value: strokeEdge } = useContext(StrokeEdgeRadioButtonContext);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onClickEvent = () => {
    download(canvasRef.current as HTMLCanvasElement);
  }

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // 合成ルール
    ctx.globalCompositeOperation = 'source-over';
    // 現在の描画をクリア
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    // 背景を描画
    ctx = createBackGroudColor(bgColorValue, bgOpacityValue, bgChecked, ctx);

    // テキスト描画
    ctx = fillText(textValue, textSizeValue, textWeightValue, textOpacityValue, textColor, fontValue, ctx);

    // ストローク描画
    ctx = drawStroke(ctx);


    function drawStroke(ctx: CanvasRenderingContext2D): CanvasRenderingContext2D{
      if (strokeEdge == 'outer')
      {
        ctx = drawOuterStroke(textValue, strokeWidthValue, strokeColor, strokeOpacityValue, ctx);
        // テキスト再描画してストローク内側を塗りつぶす
        ctx = fillText(textValue, textSizeValue, textWeightValue, textOpacityValue, textColor, fontValue, ctx);
      }
      if (strokeEdge == 'inner')
      {
        ctx = drawInnerStroke(textValue, strokeWidthValue, strokeColor, strokeOpacityValue, ctx);
      }
      return ctx;
    };
  },
    [textValue, textSizeValue, textWeightValue, textOpacityValue, textColor, fontValue, bgColorValue, bgOpacityValue, bgChecked, strokeWidthValue, strokeColor, strokeOpacityValue, strokeEdge]
  );



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
