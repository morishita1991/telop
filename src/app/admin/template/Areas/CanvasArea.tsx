import React from 'react';
import BackGroundColorPicker from '../components/BackGround/BackGroundColorPicker';
import Canvas from '../components/Canvas';
import { canvasW, canvasH } from './Const';
import BackGroundOpacityRangeBar from '../components/BackGround/BackGroundOpacityRangeBar';
import TextArea from './TextArea';
import ShadowArea from "./ShadowArea";
import StrokeArea from "./StrokeArea";
import GradationArea from './GradationArea';

export default function CanvasArea() {
  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <TextArea></TextArea>
          <StrokeArea></StrokeArea>
          <ShadowArea></ShadowArea>
          <GradationArea></GradationArea>
        </div>
        <div className="col-sm-9">
          <div className="px-4 mx-3 mb-5" style={{ maxWidth: canvasW, maxHeight: canvasH + 120 }}>
              <div className="row" >
                <div className="col-sm-3" >
                  <div className="row ms-3 mt-5">
                    <BackGroundColorPicker></BackGroundColorPicker>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="col-12 my-4 h6">
                    <BackGroundOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></BackGroundOpacityRangeBar>
                  </div>
                </div>
              </div>
            <Canvas></Canvas>
          </div>
        </div>
      </div>
    </>
  );
}
