import React, { useRef, useContext, useEffect } from 'react';
import { TextInputContext } from "./providers/Text/TextInputProvider";
import { TextSizeRangeBarContext } from './providers/Text/TextSizeRangeBarProvider';
import { TextWeightRangeBarContext } from './providers/Text/TextWeightRangeBarProvider';
import { TextOpacityRangeBarContext } from './providers/Text/TextOpacityRangeBarProvider';
import { TextColorContext } from './providers/Text/TextColorProvider';
import { TextFontContext } from './providers/Text/TextFontProvider';
import { canvasW, canvasH } from '../Areas/Const';
import download from './Download';
import { drawText, getCtxFont } from './Text/DrawingText';
import { drawOuterStroke, drawInnerStroke } from './Stroke/DrawingStroke';
import { getShadowPosition } from './Shadow/DrawingShadow';
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
import Button from '../../../../../node_modules/@mui/material/Button/Button';
import CloudDownloadIcon from '../../../../../node_modules/@mui/icons-material/CloudDownload';
import { GradationLeftColorContext } from './providers/Gradation/GradationLeftColorProvider';
import { GradationCenterColorContext } from './providers/Gradation/GradationCenterColorProvider';
import { GradationRightColorContext } from './providers/Gradation/GradationRightColorProvider';
import { GradationSliderContext } from './providers/Gradation/GradationSliderProvider';
import { GradationPatternRadioButtonContext } from './providers/Gradation/GradationPatternRadioButtonProvider';


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
  const { rangeValue: shadowDistanceValue } = useContext(ShadowDistanceRangeBarContext);
  const { rangeValue: shadowAngleValue } = useContext(ShadowAngleRangeBarContext);
  const { colorValue: shadowColor } = useContext(ShadowColorContext);
  const { rangeValue: shadowOpacityValue } = useContext(ShadowOpacityRangeBarContext);
  const { colorValue: gradLeftColor } = useContext(GradationLeftColorContext);
  const { colorValue: gradCenterColor } = useContext(GradationCenterColorContext);
  const { colorValue: gradRightColor } = useContext(GradationRightColorContext);
  const { rangeValue: gradSlideValue } = useContext(GradationSliderContext);
  const { value: gradPattern } = useContext(GradationPatternRadioButtonContext);

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
    // 背景
    ctx = createBackGroudColor(bgColorValue, bgOpacityValue, ctx);
    // 影
    ctx = drawShadow(ctx);

    // テキスト
    ctx = drawText(textValue, textSizeValue, textWeightValue, textOpacityValue, textColor, fontValue, gradLeftColor, gradCenterColor, gradRightColor, gradSlideValue, gradPattern, ctx);


    // ストローク
    ctx = drawStroke(ctx);

    function drawStroke(ctx: CanvasRenderingContext2D): CanvasRenderingContext2D {
      if (strokeEdge == 'outer') {
        ctx = drawOuterStroke(textValue, strokeWidthValue, strokeColor, strokeOpacityValue, ctx);
        // テキスト再描画してストローク内側を塗りつぶす
        ctx = drawText(textValue, textSizeValue, textWeightValue, textOpacityValue, textColor, fontValue, gradLeftColor, gradCenterColor, gradRightColor, gradSlideValue, gradPattern, ctx);
      }
      if (strokeEdge == 'inner') {
        ctx = drawInnerStroke(textValue, strokeWidthValue, strokeColor, strokeOpacityValue, ctx);
      }
      return ctx;
    };

    function drawShadow(ctx: CanvasRenderingContext2D): CanvasRenderingContext2D {
      ctx.globalAlpha = shadowOpacityValue;
      ctx.font = getCtxFont(textWeightValue, textSizeValue, fontValue);
      const { shadowX, shadowY } = getShadowPosition(shadowAngleValue, shadowDistanceValue);
      ctx.fillStyle = shadowColor;
      ctx.fillText(textValue, shadowX, shadowY);
      return ctx;
    }
  },
    [textValue, textSizeValue, textWeightValue, textOpacityValue, textColor, fontValue, bgColorValue, bgOpacityValue, strokeWidthValue, strokeColor, strokeOpacityValue, strokeEdge, shadowDistanceValue, shadowAngleValue, shadowColor, shadowOpacityValue, gradLeftColor, gradCenterColor, gradRightColor, gradSlideValue, gradPattern]
  );



  return (
    <>
      <div className="row">
        <canvas id="canvas" width={canvasW} height={canvasH} ref={canvasRef}></canvas>
      </div>
      <div className="d-flex flex-row-reverse mt-4">
        <Button
          component="label"
          variant="contained"
          size="large"
          color="primary"
          startIcon={<CloudDownloadIcon />}
          onClick={onClickEvent}>
          画像ダウンロード
        </Button>
      </div>
    </>
  );
}
