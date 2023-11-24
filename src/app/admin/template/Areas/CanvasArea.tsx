import React, { useContext } from 'react';
import BackGroundColorPicker from '../components/BackGround/BackGroundColorPicker';
import Canvas from '../components/Canvas';
import { canvasW, canvasH } from './Const';
import BackGroundOpacityRangeBar from '../components/BackGround/BackGroundOpacityRangeBar';
import BackGroundCheckBox from '../components/BackGround/BackGroundCheckBox';
import { BackGroundCheckBoxContext } from '../components/providers/BackGround/BackGroundCheckBoxProvider ';

export default function CanvasArea() {
  const { isChecked } = useContext(BackGroundCheckBoxContext);
  return (
    <>
      <div className="border p-4 m-3 mb-5" style={{ maxWidth: canvasW, maxHeight: canvasH + 120 }}>
        <div className="row my-3 pb-3">
          <div className="col-sm-6 ms-3 mt-4 pt-3 h5" style={{ maxWidth: '200px' }}>
            <BackGroundCheckBox></BackGroundCheckBox>
          </div>
          <div className="col-sm-6">
            <div className={`border row ${!isChecked && 'bg-light'}`} style={{ maxWidth: '600px' }}>
              <div className="col-sm-6 ms-5" style={{ maxWidth: '200px' }}>
                <div className="row mt-4 pt-3">
                  <BackGroundColorPicker></BackGroundColorPicker>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="col-12 my-4 ms-4 ps-3 h5">
                  <BackGroundOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></BackGroundOpacityRangeBar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Canvas></Canvas>
      </div>
    </>
  );
}
