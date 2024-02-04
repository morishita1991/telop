import React, { useRef, useContext, useEffect } from 'react';
import { TextInputContext } from "./providers/Text/TextInputProvider";
import { TextSizeRangeBarContext } from './providers/Text/TextSizeRangeBarProvider';
import { TextWeightRangeBarContext } from './providers/Text/TextWeightRangeBarProvider';
import { TextOpacityRangeBarContext } from './providers/Text/TextOpacityRangeBarProvider';
import { TextColorContext } from './providers/Text/TextColorProvider';
import { TextFontContext } from './providers/Text/TextFontProvider';
import { canvasW, canvasH } from '../Areas/Const';
import { drawText } from './Text/DrawingText';
import { drawOuterStroke, drawInnerStroke } from './Stroke/DrawingStroke';
import { drawShadow } from './Shadow/DrawingShadow';
import { createBackGroudColor } from './BackGround/BackGroundColor';
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
import Button from '@mui/material/Button/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { GradationLeftColorContext } from './providers/Gradation/GradationLeftColorProvider';
import { GradationCenterColorContext } from './providers/Gradation/GradationCenterColorProvider';
import { GradationRightColorContext } from './providers/Gradation/GradationRightColorProvider';
import { GradationSliderContext } from './providers/Gradation/GradationSliderProvider';
import { GradationPatternRadioButtonContext } from './providers/Gradation/GradationPatternRadioButtonProvider';
import { GradationAngleRangeBarContext } from './providers/Gradation/GradationAngleRangeBarProvider';
import { StrokeActivateSwitchContext } from './providers/Stroke/StrokeActivateSwitchProvider';
import { ShadowActivateSwitchContext } from './providers/Shadow/ShadowActivateSwitchProvider';
import { GradationActivateSwitchContext } from './providers/Gradation/GradationActivateSwitchProvider';
import { BackGroundActivateSwitchContext } from './providers/BackGround/BackGroundActivateSwitchProvider';
import { User } from './DAL/User';

// const Konva = dynamic(() => import('../components/Konva'), { ssr: false });

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
  const { checked: backgroundActivate } = useContext(BackGroundActivateSwitchContext);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onClickEvent = () => {
    // const canvas = canvasRef.current as HTMLCanvasElement;
    // let link = document.createElement("a");
    // link.href = canvas.toDataURL();
    // link.download = "telop.png";
    // link.click();

    const user = new User("Alice", "abc@example.com");
    user.create();
  }

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // 合成ルール
    ctx.globalCompositeOperation = 'source-over';
    // 現在の描画をクリア
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    // 背景
    ctx = createBackGroudColor(bgColorValue, bgOpacityValue, backgroundActivate, ctx);
    // 影
    if (shadowActivate)
    {
      ctx = drawShadow(textValue, textSizeValue, textWeightValue, fontValue, shadowOpacityValue, shadowAngleValue, shadowDistanceValue, shadowColor, ctx);
    }
    // テキスト
    ctx = drawText(textValue, textSizeValue, textWeightValue, textOpacityValue, textColor, fontValue, gradLeftColor, gradCenterColor, gradRightColor, gradSlideValue, gradColorPattern, gradAngleValue, gradationActivate, ctx);

    // ストローク
    if (strokeActive)
    {
      ctx = drawStroke(ctx);
    }
    function drawStroke(ctx: CanvasRenderingContext2D): CanvasRenderingContext2D {
      if (strokeEdge == 'outer') {
        ctx = drawOuterStroke(textValue, strokeWidthValue, strokeColor, strokeOpacityValue, ctx);
        // テキスト再描画してストローク内側を塗りつぶす
        ctx = drawText(textValue, textSizeValue, textWeightValue, textOpacityValue, textColor, fontValue, gradLeftColor, gradCenterColor, gradRightColor, gradSlideValue, gradColorPattern, gradAngleValue, gradationActivate, ctx);
      }
      if (strokeEdge == 'inner') {
        ctx = drawInnerStroke(textValue, strokeWidthValue, strokeColor, strokeOpacityValue, ctx);
      }
      return ctx;
    };
  },
    [textValue, textSizeValue, textWeightValue, textOpacityValue, textColor, fontValue, bgColorValue, bgOpacityValue, strokeWidthValue, strokeColor, strokeOpacityValue, strokeEdge, strokeActive, shadowDistanceValue, shadowAngleValue, shadowColor, shadowOpacityValue, shadowActivate, gradLeftColor, gradCenterColor, gradRightColor, gradSlideValue, gradColorPattern, gradAngleValue, gradationActivate, backgroundActivate]
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
