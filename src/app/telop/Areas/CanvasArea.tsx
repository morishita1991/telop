import React from 'react';
import BackGroundColorPicker from '../components/ColorPicker/BackGroundColorPicker';
import Canvas from '../components/Canvas';
import { canvasW, canvasH } from './Const';
import BackGroundOpacityRangeBar from '../components/RangeBar/BackGroundOpacityRangeBar';

const CanvasArea = () => {
  return (
    <>
      <div className="border p-4 m-3 mb-5" style={{ maxWidth: canvasW, maxHeight: canvasH + 120 }}>
        <div className="row my-3 pb-3">
          <div className="col-sm-6 ms-3 mt-4 pt-3 h5" style={{ maxWidth: '200px' }}>
            <input className="form-check-input" type="checkbox" id="bgColorCheck"></input>
            <label className="form-check-label ms-1 mt-1" htmlFor="bgColorCheck" style={{ display: 'inline-block' }}>
              背景色の設定
            </label>
          </div>
          <div className="col-sm-6">
            <div className="border row" style={{ maxWidth: '600px' }}>
              <div className="col-sm-6 ms-5" style={{ maxWidth: '200px' }}>
                <div className="row mt-4 pt-3">
                  <BackGroundColorPicker></BackGroundColorPicker>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="col-12 my-4 h5">
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

export default CanvasArea;

// function () {
//   const canvas = document.getElementById('canvas');
//   let link = document.createElement("a");
//   link.href = canvas.toDataURL();
//   link.download = "telop.png";
//   link.click();
// }

// export class Downloader {
//   constructor() {
//     const downloader = document.getElementById('download');
//     downloader.addEventListener('click', (e) => {
//       Downloader.downloadImage();
//     });
//   }
//   static downloadImage()
//   {
    // const canvas = document.getElementById('canvas');
    // let link = document.createElement("a");
    // link.href = canvas.toDataURL();
    // link.download = "telop.png";
    // link.click();
//   }
// }
