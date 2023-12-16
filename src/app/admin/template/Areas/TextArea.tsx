import React from 'react';
import SubTitle from '../components/SubTitle';
import TextInput from '../components/TextInput';
import FontSelect from '../components/FontSelect';
import TextSizeRangeBar from '../components/Text/TextSizeRangeBar';
import TextWeightRangeBar from '../components/Text/TextWeightRangeBar';
import TextOpacityRangeBar from '../components/Text/TextOpacityRangeBar';
import TextColorPicker from '../components/Text/TextColorPicker';

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
        <div className="row mx-3 mb-5 h6">
          <div className="col-sm-3">
            <TextSizeRangeBar text={'サイズ'} min={30} max={480} step={5}></TextSizeRangeBar>
          </div>
          <div className="col-sm-3">
            <TextWeightRangeBar text={'太さ'} min={100} max={900} step={100}></TextWeightRangeBar>
          </div>
          <div className="col-sm-3 mt-5" style={{ maxWidth: '200px' }}>
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
