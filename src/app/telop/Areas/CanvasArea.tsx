import React, { useState, useRef, MouseEvent } from 'react';
import SubTitle from '../components/SubTitle';

const CanvasArea = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onClickEvent = (e: MouseEvent<HTMLButtonElement>) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    console.log(canvas);

    // TODO: canvas実装

    // let link = document.createElement("a");
    // link.href = canvas.toDataURL();
    // link.download = "telop.png";
    // link.click();
  }

  return (
    <>
      <SubTitle text={'キャンバス'}></SubTitle>
      <div className="border p-4 m-3 mb-5" style={{ maxWidth: '1920px' }}>
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
                  <input type="color" className="form-control form-control-color" id="bg-color" name="color" defaultValue="#FFFFFF"
                    style={{ display: 'inline-block' }}></input>
                  <input type="text" className="form-control ms-2" id="input-bg-color" defaultValue="#FFFFFF"
                    style={{ maxWidth: '100px', display: 'inline-block' }}></input>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="col-12 my-4 h5">
                  <span style={{ display: 'inline-block' }}>不透明度</span>
                  <input type="text" className="form-control ms-2" id="input-bg-opacity" defaultValue="1"
                    style={{ maxWidth: '50px', display: 'inline-block' }}></input>
                  <input type="range" className="form-range" min="0" max="1" step="0.1" id="bgOpacityRange" defaultValue="1"
                    style={{ maxWidth: '200px' }}></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <canvas id="canvas" width="1920" height="350" ref={canvasRef}></canvas>
        </div>
        <div className="d-flex flex-row ms-3 mt-4">
          <button className="btn btn-primary" id="download" onClick={onClickEvent}>
            画像ダウンロード
          </button>
        </div>
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
