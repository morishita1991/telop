import { Canvas } from '../component/canvas.js';
import React from 'react';
import SubTitle from '../component/SubTitle';
import TextInput from '../component/TextInput';
import FontSelect from '../component/FontSelect';
import RangeBar from '../component/RangeBar';

function TextArea() {
  return (
    <>
      <SubTitle text={'テキスト'}></SubTitle>
      <div className="border m-3" style={{ maxWidth: '1080px' }}>
        <div className="row mx-3 h3">
          <div className="col-sm-4 p-3">
            <TextInput></TextInput>
          </div>
          <div className="col-sm-4 p-3">
            <FontSelect></FontSelect>
          </div>
        </div>
        <div className="row mx-3 mb-5 h5">
          <div className="col-sm-3">
            <RangeBar text={'サイズ'} defaultValue={105} min={30} max={180} step={5}></RangeBar>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-12 pt-3 mb-2 mt-3">
                <span style={{ display: 'inline-block' }}>太さ</span>
                <input type="text" className="form-control ms-2" id="input-font-weight" defaultValue="500" style={{ maxWidth: '60px', display: 'inline-block' }}></input>
              </div>
              <div className="col-12">
                <input type="range" className="form-range" min="100" max="900" step="100" id="fontWeightRange" defaultValue="500" style={{ maxWidth: '200px' }}></input>
              </div>
            </div>
          </div>
          <div className="col-sm-3" style={{ maxWidth: '200px' }}>
            <div className="row">
              <div className="col-12 pt-2 mb-2 mt-3">
                <span style={{ display: 'inline-block' }}>色</span>
                <input type="text" className="form-control ms-2" id="input-color-text" defaultValue="#00CCFF" style={{ maxWidth: '100px', display: 'inline-block' }}></input>
              </div>
              <div className="col-12">
                <input type="color" className="form-control form-control-color" id="color-text" name="color" defaultValue="#00CCFF"></input>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-12 pt-2 mb-2 mt-4">
                <span style={{ display: 'inline-block' }}>不透明度</span>
                <input type="text" className="form-control ms-2" id="input-opacity-text" defaultValue="1" style={{ maxWidth: '50px', display: 'inline-block' }}></input>
              </div>
              <div className="col-12">
                <input type="range" className="form-range" min="0" max="1" step="0.1" id="fontOpacityRange" defaultValue="1" style={{ maxWidth: '200px' }}></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextArea;


// export class Text {
//   constructor() {
//     // フォント選択を監視
//     const fontSelect = document.getElementById('font-select');
//     fontSelect.addEventListener('click', (e) => {
//       let fontButton = document.getElementById('fontFamilyList');
//       const selectedValue = e.target.value;
//       fontButton.value = selectedValue;
//       fontButton.innerText = selectedValue;
//       fontButton.setAttribute('style', `font-family: ${selectedValue};`);
//       Canvas.createCanvas();
//     });

//     // サイズ選択を監視
//     const fontSizeSelect = document.getElementById('fontSizeRange');
//     fontSizeSelect.addEventListener('change', (e) => {
//       // テキストのサイズ変更を影のサイズに追随させる
//       let shadowSize = document.getElementById('shadowSizeRange');
//       shadowSize.value = e.target.value;

//       const inputFontSize = document.getElementById('input-font-size');
//       inputFontSize.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputFontSize = document.getElementById('input-font-size');
//     inputFontSize.addEventListener('change', (e) => {
//       // テキストのサイズ変更を影のサイズに追随させる
//       let shadowSize = document.getElementById('shadowSizeRange');
//       shadowSize.value = e.target.value;

//       const fontSizeSelect = document.getElementById('fontSizeRange');
//       fontSizeSelect.value = e.target.value;
//       Canvas.createCanvas();
//     });

//     // 太さ選択を監視
//     const fontWeightSelect = document.getElementById('fontWeightRange');
//     fontWeightSelect.addEventListener('change', (e) => {
//       const inputFontWeight = document.getElementById('input-font-weight');
//       inputFontWeight.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputFontWeight = document.getElementById('input-font-weight');
//     inputFontWeight.addEventListener('change', (e) => {
//       const fontWeightSelect = document.getElementById('fontWeightRange');
//       fontWeightSelect.value = e.target.value;
//       Canvas.createCanvas();
//     });

//     // 不透明度
//     const fontOpacityRange = document.getElementById('fontOpacityRange');
//     fontOpacityRange.addEventListener('change', (e) => {
//       const inputOpacityText = document.getElementById('input-opacity-text');
//       inputOpacityText.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputOpacityText = document.getElementById('input-opacity-text');
//     inputOpacityText.addEventListener('change', (e) => {
//       const fontOpacityRange = document.getElementById('fontOpacityRange');
//       fontOpacityRange.value = e.target.value;
//       Canvas.createCanvas();
//     });

//     // 文字入力を監視
//     const textInput = document.getElementById('input-text');
//     textInput.addEventListener('input', (e) => {
//       Canvas.createCanvas();
//     });

//     // 色選択を監視
//     const textColor = document.getElementById('color-text');
//     textColor.addEventListener('change', (e) => {
//       const inputColor = document.getElementById('input-color-text');
//       inputColor.value = e.target.value;
//       Canvas.createCanvas();
//     });
//     const inputColorText = document.getElementById('input-color-text');
//     inputColorText.addEventListener('change', (e) => {
//       const inputColor = document.getElementById('color-text');
//       inputColor.value = e.target.value;
//       Canvas.createCanvas();
//     });


//   }
//   static createDropDown() {
//     const fontFamilies = [
//       // 日本語
//       'Kosugi', 'Noto Sans Japanese', 'Kiwi Maru',
//       // 英語
//       'Coiny', 'Squada One', 'Audiowide', 'Abril Fatface',
//     ];
//     fontFamilies.forEach(function (element) {
//       // button要素
//       let button = document.createElement("button");
//       button.setAttribute('class', 'dropdown-item');
//       button.setAttribute('button', 'button');
//       button.value = element;
//       button.innerText = element;
//       button.setAttribute('style', `font-size:20px; font-family: ${element};`);

//       // li要素
//       let list = document.createElement("li");
//       list.appendChild(button);

//       const ul = document.getElementById('font-select');
//       ul.appendChild(list);
//     });
//   }
// }
