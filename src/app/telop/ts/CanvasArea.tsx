import React, { useRef, MouseEvent } from 'react';

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
      <div className="row">
        <canvas id="canvas" width="1920" height="350" ref={canvasRef}></canvas>
      </div>
      <div className="d-flex flex-row ms-3 mt-4">
        <button className="btn btn-primary" id="download" onClick={onClickEvent}>
          画像ダウンロード
        </button>
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
