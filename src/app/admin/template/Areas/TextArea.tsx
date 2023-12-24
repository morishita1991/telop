import React, { useContext } from 'react';
import styled from "styled-components";
import TextInput from '../components/TextInput';
import Collapse from '../../../../../node_modules/@mui/material/Collapse/Collapse';
import IconButton from '../../../../../node_modules/@mui/material/IconButton/IconButton';
import ExpandCircleDownIcon from '../../../../../node_modules/@mui/icons-material/ExpandCircleDown';
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

  const Div = styled.div`
      &:hover {
      background-color: #f5f5f5;
      border-radius: 6px;
      cursor: pointer;
      transition: .4s;
    }
  `;

  return (
    <>
      <Div className="d-flex flex-row border-bottom mx-4 ms-4 h4" onClick={handleClick}>
        <div className='ms-2'>
          <IconButton onClick={handleClick}>
            <ExpandCircleDownIcon
              id="textLabel"
              fontSize="medium"
              color="success"
              sx={{ display: !open ? 'block' : 'none' }}/>
            <ExpandCircleDownIcon
              id="textLabel"
              fontSize="medium"
              color="success"
              sx={{ display: open ? 'block' : 'none' }}
              style={{ transform: 'scale(1, -1)' }} />
          </IconButton>
        </div>
        <div className='pt-1'>
          <label className="h6" style={{cursor: 'pointer'}} onClick={handleClick}>テキスト</label>
        </div>
      </Div>
      <Collapse in={!open}>
        <div className="mb-5 bg-light" style={{ minWidth: '300px', maxWidth: '400px' }}>
          <div className="row ms-4 h3">
            <div className="row ms-2 mt-3 p-2">
              <TextInput></TextInput>
            </div>
            <div className="row ms-1 p-3">
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
            <div className="row mb-2">
              <TextOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></TextOpacityRangeBar>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default TextArea;
