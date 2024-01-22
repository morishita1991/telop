import React from 'react';
import Canvas from '../components/Canvas';
import TextArea from './TextArea';
import ShadowArea from "./ShadowArea";
import StrokeArea from "./StrokeArea";
import GradationArea from './GradationArea';
import BackGroundArea from './BackGroundArea';

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
          <div className="col-sm-5">
            <BackGroundArea></BackGroundArea>
          </div>
          <Canvas></Canvas>
        </div>
      </div>
    </>
  );
}
