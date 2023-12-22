'use client';
import React from "react";
import "./sample.css";
import HeaderArea from "./Areas/HeaderArea";
import CanvasArea from "./Areas/CanvasArea";
import { TextInputProvider } from "./components/providers/Text/TextInputProvider";
import { TextSizeRangeBarProvider } from "./components/providers/Text/TextSizeRangeBarProvider";
import { TextWeightRangeBarProvider } from "./components/providers/Text/TextWeightRangeBarProvider";
import { TextOpacityRangeBarProvider } from "./components/providers/Text/TextOpacityRangeBarProvider";
import { TextColorProvider } from "./components/providers/Text/TextColorProvider";
import { TextFontProvider } from "./components/providers/Text/TextFontProvider";
import { BackGroundColorProvider } from "./components/providers/BackGround/BackGroundColorProvider";
import { BackGroundOpacityRangeBarProvider } from "./components/providers/BackGround/BackGroundOpacityRangeBarProvider";
import { StrokeWidthRangeBarProvider } from "./components/providers/Stroke/StrokeWidthRangeBarProvider";
import { StrokeColorProvider } from "./components/providers/Stroke/StrokeColorProvider";
import { StrokeOpacityRangeBarProvider } from "./components/providers/Stroke/StrokeOpacityRangeBarProvider";
import { StrokeCheckButtonProvider } from "./components/providers/Stroke/StrokeCheckButtonProvider";
import { StrokeEdgeRadioButtonProvider } from "./components/providers/Stroke/StrokeEdgeRadioButtonProvider";
import { ShadowDistanceRangeBarProvider } from "./components/providers/Shadow/ShadowDistanceRangeBarProvider";
import { ShadowCheckButtonProvider } from "./components/providers/Shadow/ShadowCheckButtonProvider";
import { ShadowAngleRangeBarProvider } from "./components/providers/Shadow/ShadowAngleRangeBarProvider";
import { ShadowColorProvider } from "./components/providers/Shadow/ShadowColorProvider";
import { ShadowOpacityRangeBarProvider } from "./components/providers/Shadow/ShadowOpacityRangeBarProvider";
import { TextCheckButtonProvider } from "./components/providers/Text/TextCheckButtonProvider";
import buildProvidersTree from "./utils/buildProvidersTree";
import { GradationCheckButtonProvider } from "./components/providers/Gradation/GradationCheckButtonProvider";
import { GradationLeftColorProvider } from "./components/providers/Gradation/GradationLeftColorProvider";
import { GradationCenterColorProvider } from "./components/providers/Gradation/GradationCenterColorProvider";
import { GradationRightColorProvider } from "./components/providers/Gradation/GradationRightColorProvider";
import { GradationSliderProvider } from "./components/providers/Gradation/GradationSliderProvider";
import { GradationPatternRadioButtonProvider } from "./components/providers/Gradation/GradationPatternRadioButtonProvider";

export default function Home() {
  const ProviderTree = buildProvidersTree([
    GradationPatternRadioButtonProvider,
    GradationSliderProvider,
    GradationRightColorProvider,
    GradationCenterColorProvider,
    GradationLeftColorProvider,
    GradationCheckButtonProvider,
    ShadowOpacityRangeBarProvider,
    ShadowColorProvider,
    ShadowAngleRangeBarProvider,
    ShadowCheckButtonProvider,
    ShadowDistanceRangeBarProvider,
    StrokeEdgeRadioButtonProvider,
    StrokeCheckButtonProvider,
    StrokeOpacityRangeBarProvider,
    StrokeColorProvider,
    StrokeWidthRangeBarProvider,
    BackGroundOpacityRangeBarProvider,
    BackGroundColorProvider,
    TextFontProvider,
    TextColorProvider,
    TextOpacityRangeBarProvider,
    TextWeightRangeBarProvider,
    TextSizeRangeBarProvider,
    TextInputProvider,
    TextCheckButtonProvider,
  ]);

  return (
    <main className="flex min-h-screen flex-col p-24">
      <ProviderTree>
        <HeaderArea></HeaderArea>
        <CanvasArea></CanvasArea>
      </ProviderTree>
      <div className="m-2 ms-5 align-top">
        <div style={{ maxHeight: '50px' }}>
          <div className="d-flex flex-row">
            <input className="btn btn-default align-top" type="checkbox" id="gradationCheckBox" data-bs-toggle="collapse" data-bs-target="#collapseGradationAria" aria-expanded="false" aria-controls="collapseExample" style={{ transform: 'scale(1.5)' }}></input>
            <label className="form-check-label ms-3 mt-1 h4" htmlFor='gradationCheckBox'>グラデーション</label>
          </div>
        </div>
      </div>
      <div className="border ms-3 mb-5 collapse" id="collapseGradationAria">
        <div className="row border m-3 h5">
        </div>
      </div>
      <div className="m-2 ms-5 align-top">
        <div style={{ maxHeight: '50px' }}>
          <div className="d-flex flex-row">
            <input className="btn btn-default align-top" type="checkbox" id="brightCheckBox" data-bs-toggle="collapse" data-bs-target="#collapseBrightAria" aria-expanded="false" aria-controls="collapseExample" style={{ transform: 'scale(1.5)' }}></input>
            <label className="form-check-label ms-3 mt-1 h4" htmlFor='brightCheckBox'>光沢</label>
          </div>
        </div>
      </div>
      <div className="border ms-3 mb-5 collapse" id="collapseBrightAria">
        <div className="row border m-3 h5">
        </div>
      </div>
      <div className="m-2 ms-5 align-top">
        <div style={{ maxHeight: '50px' }}>
          <div className="d-flex flex-row">
            <input className="btn btn-default align-top" type="checkbox" id="textureCheckBox" data-bs-toggle="collapse" data-bs-target="#collapseTextureAria" aria-expanded="false" aria-controls="collapseExample" style={{ transform: 'scale(1.5)' }}></input>
            <label className="form-check-label ms-3 mt-1 h4" htmlFor='textureCheckBox'>テクスチャ</label>
          </div>
        </div>
      </div>
      <div className="border ms-3 collapse" id="collapseTextureAria">
        <div className="row border m-3 h5">
        </div>
      </div>
    </main>
  )
}
