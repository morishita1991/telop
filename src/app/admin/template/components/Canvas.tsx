import React, { useState, useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { TextInputContext } from "./providers/Text/TextInputProvider";
import { TextSizeRangeBarContext } from './providers/Text/TextSizeRangeBarProvider';
import { TextWeightRangeBarContext } from './providers/Text/TextWeightRangeBarProvider';
import { TextOpacityRangeBarContext } from './providers/Text/TextOpacityRangeBarProvider';
import { TextColorContext } from './providers/Text/TextColorProvider';
import { TextFontContext } from './providers/Text/TextFontProvider';
import { canvasW, canvasH, baseX, baseY } from '../Areas/Const';
import { drawText, getCtxFont } from './Text/DrawingText';
import { drawOuterStroke, drawInnerStroke } from './Stroke/DrawingStroke';
import { drawShadow, getShadowPosition } from './Shadow/DrawingShadow';
import createBackGroudColor from './BackGround/BackGroundColor';
import { BackGroundColorContext } from './providers/BackGround/BackGroundColorProvider';
import { BackGroundOpacityRangeBarContext } from './providers/BackGround/BackGroundOpacityRangeBarProvider';
import { StrokeColorContext } from './providers/Stroke/StrokeColorProvider';
import { StrokeWidthRangeBarContext } from './providers/Stroke/StrokeWidthRangeBarProvider';
import { StrokeOpacityRangeBarContext } from './providers/Stroke/StrokeOpacityRangeBarProvider';
import { StrokeEdgeRadioButtonContext } from './providers/Stroke/StrokeEdgeRadioButtonProvider';
import { ShadowDistanceRangeBarContext } from './providers/Shadow/ShadowDistanceRangeBarProvider';
import { ShadowAngleRangeBarContext } from './providers/Shadow/ShadowAngleRangeBarProvider';
import { ShadowColorContext } from './providers/Shadow/ShadowColorProvider';
import { ShadowOpacityRangeBarContext } from './providers/Shadow/ShadowOpacityRangeBarProvider';
import { GradationLeftColorContext } from './providers/Gradation/GradationLeftColorProvider';
import { GradationCenterColorContext } from './providers/Gradation/GradationCenterColorProvider';
import { GradationRightColorContext } from './providers/Gradation/GradationRightColorProvider';
import { GradationSliderContext } from './providers/Gradation/GradationSliderProvider';
import { GradationPatternRadioButtonContext } from './providers/Gradation/GradationPatternRadioButtonProvider';
import { GradationAngleRangeBarContext } from './providers/Gradation/GradationAngleRangeBarProvider';
import { StrokeActivateSwitchContext } from './providers/Stroke/StrokeActivateSwitchProvider';
import { ShadowActivateSwitchContext } from './providers/Shadow/ShadowActivateSwitchProvider';
import { GradationActivateSwitchContext } from './providers/Gradation/GradationActivateSwitchProvider';

export default function Canvas() {
  const { textValue } = useContext(TextInputContext);
  const { colorValue: textColor } = useContext(TextColorContext);
  const { fontValue } = useContext(TextFontContext);
  const { bgColorValue } = useContext(BackGroundColorContext);
  const { rangeValue: textSizeValue } = useContext(TextSizeRangeBarContext);
  const { rangeValue: textWeightValue } = useContext(TextWeightRangeBarContext);
  const { rangeValue: textOpacityValue } = useContext(TextOpacityRangeBarContext);
  const { rangeValue: bgOpacityValue } = useContext(BackGroundOpacityRangeBarContext);
  const { colorValue: strokeColor } = useContext(StrokeColorContext);
  const { rangeValue: strokeWidthValue } = useContext(StrokeWidthRangeBarContext);
  const { rangeValue: strokeOpacityValue } = useContext(StrokeOpacityRangeBarContext);
  const { value: strokeEdge } = useContext(StrokeEdgeRadioButtonContext);
  const { checked: strokeActive } = useContext(StrokeActivateSwitchContext);
  const { rangeValue: shadowDistanceValue } = useContext(ShadowDistanceRangeBarContext);
  const { rangeValue: shadowAngleValue } = useContext(ShadowAngleRangeBarContext);
  const { colorValue: shadowColor } = useContext(ShadowColorContext);
  const { rangeValue: shadowOpacityValue } = useContext(ShadowOpacityRangeBarContext);
  const { checked: shadowActivate } = useContext(ShadowActivateSwitchContext);
  const { colorValue: gradLeftColor } = useContext(GradationLeftColorContext);
  const { colorValue: gradCenterColor } = useContext(GradationCenterColorContext);
  const { colorValue: gradRightColor } = useContext(GradationRightColorContext);
  const { rangeValue: gradSlideValue } = useContext(GradationSliderContext);
  const { value: gradColorPattern } = useContext(GradationPatternRadioButtonContext);
  const { rangeValue: gradAngleValue } = useContext(GradationAngleRangeBarContext);
  const { checked: gradationActivate } = useContext(GradationActivateSwitchContext);

  console.log(textSizeValue);

  const props = {
    text: textValue,
    x: baseX,
    y: baseY,
    fontSize: textSizeValue,
    letterSpacing: 1,
    fill: textColor,
    id: "text1",
  };

  const Konva = dynamic(() => import('../components/Konva'), { ssr: false });
  return (
    <>
      <div className="row">
        <Konva {...props}></Konva>
      </div>
    </>
  );

  // useEffect(() => {
    // const canvas = document.getElementById('canvas') as HTMLCanvasElement
    // let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // // 合成ルール
    // ctx.globalCompositeOperation = 'source-over';
    // // 現在の描画をクリア
    // ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    // // 背景
    // ctx = createBackGroudColor(bgColorValue, bgOpacityValue, ctx);
    // // 影
    // if (shadowActivate)
    // {
    //   ctx = drawShadow(textValue, textSizeValue, textWeightValue, fontValue, shadowOpacityValue, shadowAngleValue, shadowDistanceValue, shadowColor, ctx);
    // }
    // // テキスト
    // ctx = drawText(textValue, textSizeValue, textWeightValue, textOpacityValue, textColor, fontValue, gradLeftColor, gradCenterColor, gradRightColor, gradSlideValue, gradColorPattern, gradAngleValue, gradationActivate, ctx);

    // // ストローク
    // if (strokeActive)
    // {
    //   ctx = drawStroke(ctx);
    // }
    // function drawStroke(ctx: CanvasRenderingContext2D): CanvasRenderingContext2D {
    //   if (strokeEdge == 'outer') {
    //     ctx = drawOuterStroke(textValue, strokeWidthValue, strokeColor, strokeOpacityValue, ctx);
    //     // テキスト再描画してストローク内側を塗りつぶす
    //     ctx = drawText(textValue, textSizeValue, textWeightValue, textOpacityValue, textColor, fontValue, gradLeftColor, gradCenterColor, gradRightColor, gradSlideValue, gradColorPattern, gradAngleValue, gradationActivate, ctx);
    //   }
    //   if (strokeEdge == 'inner') {
    //     ctx = drawInnerStroke(textValue, strokeWidthValue, strokeColor, strokeOpacityValue, ctx);
    //   }
    //   return ctx;
    // };
  // },
  //   [textValue, textSizeValue, textWeightValue, textOpacityValue, textColor, fontValue, bgColorValue, bgOpacityValue, strokeWidthValue, strokeColor, strokeOpacityValue, strokeEdge, strokeActive, shadowDistanceValue, shadowAngleValue, shadowColor, shadowOpacityValue, shadowActivate, gradLeftColor, gradCenterColor, gradRightColor, gradSlideValue, gradColorPattern, gradAngleValue, gradationActivate]
  // );
}
