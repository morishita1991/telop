import React from 'react';

export default function ShadowArea()
{
  return (
    <>
      <div className="m-2 ms-5 align-top">
        <div style={{ maxHeight: '50px' }}>
          <div className="d-flex flex-row">
            <input className="btn btn-default align-top" type="checkbox" id="shadowCheckBox" data-bs-toggle="collapse" data-bs-target="#collapseShadowAria" aria-expanded="false" aria-controls="collapseExample" style={{ transform: 'scale(1.5)' }}></input>
            <label className="form-check-label ms-3 mt-1 h4" htmlFor='shadowCheckBox'>影</label>
          </div>
        </div>
      </div>
      <div className="border ms-3 mb-5 collapse" id="collapseShadowAria" style={{ maxWidth: '1080px' }}>
        <div className="row border m-3 h5">
          <div className="row p-3 ms-3">
            <div className="col-sm-3 me-5" style={{ maxWidth: '200px' }}>
              <div className="row">
                <div className="col-12 mt-4">
                  <span style={{ display: 'inline-block' }}>距離</span>
                  <input type="text" className="form-control ms-2" id="input-shadow-dis" defaultValue="0" style={{ maxWidth: '50px', display: 'inline-block' }}></input>
                  <input type="range" className="form-range" min="0" max="50" step="1" id="shadowDisRange" defaultValue="0"></input>
                </div>
              </div>
            </div>
            <div className="col-sm-3 me-5" style={{ maxWidth: '200px' }}>
              <div className="row">
                <div className="col-12 mt-4">
                  <span style={{ display: 'inline-block' }}>角度</span>
                  <input type="text" className="form-control ms-2" id="input-shadow-deg" defaultValue="0" style={{ maxWidth: '60px', display: 'inline-block' }}></input>
                  <span style={{ display: 'inline-block' }}>°</span>
                  <input type="range" className="form-range" min="0" max="360" step="1" id="shadowDegRange" defaultValue="0"></input>
                </div>
              </div>
            </div>
            <div className="col-sm-3 me-5" style={{ maxWidth: '200px' }}>
              <div className="row">
                <div className="col-12 mt-4">
                  <span style={{ display: 'inline-block' }}>サイズ</span>
                  <input type="text" className="form-control ms-2" id="input-shadow-size" defaultValue="105" style={{ maxWidth: '60px', display: 'inline-block' }}></input>
                  <span style={{ display: 'inline-block' }}>px</span>
                  <input type="range" className="form-range" min="30" max="180" step="1" id="shadowSizeRange"></input>
                </div>
              </div>
            </div>
            <div className="col-sm-3" style={{ maxWidth: '200px' }}>
              <div className="col-12 mt-3">
                <span style={{ display: 'inline-block' }}>色</span>
                <input type="text" className="form-control ms-2" id="input-color-shadow" defaultValue="#000000" style={{ maxWidth: '100px', display: 'inline-block' }}></input>
                <input type="color" className="form-control form-control-color mt-2" id="color-shadow" name="color" style={{ fontSize: '20px' }} defaultValue="#000000"></input>
              </div>
            </div>
          </div>
          <div className="row p-3 ms-3">
            <div className="col-sm-3" style={{ maxWidth: '200px' }}>
              <div className="row">
                <div className="col-12 mt-4">
                  <span style={{ display: 'inline-block' }}>不透明度</span>
                  <input type="text" className="form-control ms-2" id="input-shadow-opacity" defaultValue="1" style={{ maxWidth: '50px', display: 'inline-block' }}></input>
                  <input type="range" className="form-range" min="0" max="1" step="0.1" defaultValue="1" id="shadowOpacityRange"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// export class Shadow {
//   constructor() {
//     // 影チェックボックス
//     const useShadowCheckBox = document.getElementById('shadowCheckBox');
//     useShadowCheckBox.addEventListener('change', () => {
//       Canvas.createCanvas();
//     });

//     // 角度の選択を監視
//     const shadowDir = document.getElementById('shadowDegRange');
//     shadowDir.addEventListener('change', (e) => {
//       const inputShadowDeg = document.getElementById('input-shadow-deg');
//       inputShadowDeg.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputShadowDeg = document.getElementById('input-shadow-deg');
//     inputShadowDeg.addEventListener('change', (e) => {
//       const shadowDir = document.getElementById('shadowDegRange');
//       shadowDir.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     // 距離の選択を監視
//     const shadowGap = document.getElementById('shadowDisRange');
//     shadowGap.addEventListener('change', (e) => {
//       const inputShadowDis = document.getElementById('input-shadow-dis');
//       inputShadowDis.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputShadowDis = document.getElementById('input-shadow-dis');
//     inputShadowDis.addEventListener('change', (e) => {
//       const shadowGap = document.getElementById('shadowDisRange');
//       shadowGap.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     // 影のサイズの選択を監視
//     const shadowSize = document.getElementById('shadowSizeRange');
//     shadowSize.addEventListener('change', (e) => {
//       const inputShadowSize = document.getElementById('input-shadow-size');
//       inputShadowSize.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputShadowSize = document.getElementById('input-shadow-size');
//     inputShadowSize.addEventListener('change', (e) => {
//       const shadowSize = document.getElementById('shadowSizeRange');
//       shadowSize.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     // 影の不透明度の選択を監視
//     const shadowOpacity = document.getElementById('shadowOpacityRange');
//     shadowOpacity.addEventListener('change', (e) => {
//       const inputShadowOpacity = document.getElementById('input-shadow-opacity');
//       inputShadowOpacity.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputShadowOpacity = document.getElementById('input-shadow-opacity');
//     inputShadowOpacity.addEventListener('change', (e) => {
//       const shadowOpacity = document.getElementById('shadowOpacityRange');
//       shadowOpacity.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     // 色の選択を監視
//     const shadowColor = document.getElementById('color-shadow');
//     shadowColor.addEventListener('change', (e) => {
//       const inputColorShadow = document.getElementById('input-color-shadow');
//       inputColorShadow.value = e.target.value
//       Canvas.createCanvas();
//     });
//     const inputColorShadow = document.getElementById('input-color-shadow');
//     inputColorShadow.addEventListener('change', (e) => {
//       const shadowColor = document.getElementById('color-shadow');
//       shadowColor.value = e.target.value;
//       Canvas.createCanvas();
//     });
//   }

//   static shadowPosition()
//   {
//     const deg = document.getElementById('shadowDegRange').value;
//     const rad = deg * (Math.PI / 180);
//     const d = document.getElementById('shadowDisRange').value;
//     const shadowX = baseX + d * Math.cos(rad);
//     const shadowY = baseY + (d * Math.sin(rad) * (-1));
//     return { shadowX, shadowY };
//   }
// }
