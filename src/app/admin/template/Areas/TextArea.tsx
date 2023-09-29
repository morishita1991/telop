import React from 'react';
import SubTitle from '../components/SubTitle';
import TextInput from '../components/TextInput';
import FontSelect from '../components/FontSelect';
import TextSizeRangeBar from '../components/RangeBar/TextSizeRangeBar';
import TextWeightRangeBar from '../components/RangeBar/TextWeightRangeBar';
import TextOpacityRangeBar from '../components/RangeBar/TextOpacityRangeBar';
import TextColorPicker from '../components/ColorPicker/TextColorPicker';

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
            <TextSizeRangeBar text={'サイズ'} min={30} max={480} step={5}></TextSizeRangeBar>
          </div>
          <div className="col-sm-3">
            <TextWeightRangeBar text={'太さ'} min={100} max={900} step={100}></TextWeightRangeBar>
          </div>
          <div className="col-sm-3" style={{ maxWidth: '200px' }}>
            <TextColorPicker></TextColorPicker>
          </div>
          <div className="col-sm-3">
            <TextOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></TextOpacityRangeBar>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextArea;


// export class Text {
//   constructor() {
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
//   }
