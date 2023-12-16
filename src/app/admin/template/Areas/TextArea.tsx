import React, { useContext } from 'react';
import TextInput from '../components/TextInput';
import Collapse from '../../../../../node_modules/@mui/material/Collapse/Collapse';
import Button from '../../../../../node_modules/@mui/material/Button/Button';
import FontSelect from '../components/FontSelect';
import TextSizeRangeBar from '../components/Text/TextSizeRangeBar';
import TextWeightRangeBar from '../components/Text/TextWeightRangeBar';
import TextOpacityRangeBar from '../components/Text/TextOpacityRangeBar';
import TextColorPicker from '../components/Text/TextColorPicker';
import { TextCheckButtonContext } from '../components/providers/Text/TextCheckButtonProvider';

function TextArea() {
  const { open, setOpen } = useContext(TextCheckButtonContext);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="d-flex flex-row mb-3 h4">
        <Button variant="outlined" color="primary" size="small" onClick={handleClick}>
          テキスト
        </Button>
      </div>
      <Collapse in={open}>
        <div className="border m-3" style={{ maxWidth: '400px' }}>
          <div className="row ms-4 h3">
            <div className="row ms-2 p-2">
              <TextInput></TextInput>
            </div>
            <div className="row ms-1 p-2">
              <FontSelect></FontSelect>
            </div>
          </div>
          <div className="row ms-5 mb-5 h6">
            <div className="row">
              <TextSizeRangeBar text={'サイズ'} min={30} max={480} step={5}></TextSizeRangeBar>
            </div>
            <div className="row">
              <TextWeightRangeBar text={'太さ'} min={100} max={900} step={100}></TextWeightRangeBar>
            </div>
            <div className="row ms-1 mt-5" style={{ maxWidth: '200px' }}>
              <TextColorPicker></TextColorPicker>
            </div>
            <div className="row">
              <TextOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></TextOpacityRangeBar>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default TextArea;
