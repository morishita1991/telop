import React, { useContext } from 'react';
import styled from "styled-components";
import Collapse from '@mui/material/Collapse/Collapse';
import IconButton from '@mui/material/IconButton/IconButton';
import Switch from '@mui/material/Switch/Switch';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import StrokeColorPicker from '../components/Stroke/StrokeColorPicker';
import StrokeEdgeRadioButtons from '../components/Stroke/StrokeEdgeRadioButtons';
import StrokeOpacityRangeBar from '../components/Stroke/StrokeOpacityRangeBar';
import StrokeWidthRangeBar from '../components/Stroke/StrokeWidthRangeBar';
import { StrokeCheckButtonContext } from '../components/providers/Stroke/StrokeCheckButtonProvider';
import { StrokeActivateSwitchContext } from '../components/providers/Stroke/StrokeActivateSwitchProvider';

const Div = styled.div`
    &:hover {
    background-color: #f5f5f5;
    border-radius: 6px;
    cursor: pointer;
    transition: .4s;
  }
`;

export default function StrokeArea() {
  const { open, setOpen } = useContext(StrokeCheckButtonContext);
  const { checked, setChecked } = useContext(StrokeActivateSwitchContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Div className="d-flex flex-row border-bottom mx-4 ms-4 h4">
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
        <div className='pt-1 flex-fill' onClick={handleClick}>
          <label className="h6" style={{cursor: 'pointer'}} onClick={handleClick}>ストローク</label>
        </div>
        <div className='ms-auto'>
          <Switch
            checked={checked}
            onChange={handleChange}/>
        </div>
      </Div>
      <Collapse in={open}>
          <div className="mb-5" style={{ minWidth: '300px', maxWidth: '400px' }}>
            <div className="row bg-light m-3 h6">
                <div className="row ms-3 mt-4">
                  <StrokeEdgeRadioButtons></StrokeEdgeRadioButtons>
                </div>
                <div className="row ms-3">
                  <StrokeWidthRangeBar text={'太さ'} min={0} max={50} step={1}></StrokeWidthRangeBar>
                </div>
                <div className="row ms-4 mt-5" style={{ maxWidth: '200px' }}>
                  <StrokeColorPicker></StrokeColorPicker>
                </div>
                <div className="row ms-3 mb-2">
                  <StrokeOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></StrokeOpacityRangeBar>
                </div>
            </div>
          </div>
      </Collapse>
    </>
  );
}
