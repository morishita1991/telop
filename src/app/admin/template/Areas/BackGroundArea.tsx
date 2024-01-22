import React, { useContext } from 'react';
import BackGroundColorPicker from '../components/BackGround/BackGroundColorPicker';
import styled from "styled-components";
import Collapse from '@mui/material/Collapse/Collapse';
import IconButton from '@mui/material/IconButton/IconButton';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { canvasW, canvasH } from './Const';
import BackGroundOpacityRangeBar from '../components/BackGround/BackGroundOpacityRangeBar';
import { BackGroundCheckButtonContext } from '../components/providers/BackGround/BackGroundCheckButtonProvider';
import { Switch } from '@mui/material';
import { BackGroundActivateSwitchContext } from '../components/providers/BackGround/BackGroundActivateSwitchProvider';

const Div = styled.div`
    &:hover {
    background-color: #f5f5f5;
    border-radius: 6px;
    cursor: pointer;
    transition: .4s;
  }
`;

export default function BackGroundArea() {
  const { open, setOpen } = useContext(BackGroundCheckButtonContext);
  const { checked, setChecked } = useContext(BackGroundActivateSwitchContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Div className="d-flex flex-row border-bottom mx-4 ms-4 h4" style={{width: "300px"}}>
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
          <label className="h6" style={{cursor: 'pointer'}} onClick={handleClick}>背景</label>
        </div>
        <div className='ms-auto'>
          <Switch
            checked={checked}
            onChange={handleChange}/>
        </div>
      </Div>
      <Collapse in={open}>
        <div className="px-4 mx-3 mb-2 bg-light sticky-top" style={{ maxWidth: canvasW, maxHeight: canvasH + 120 }}>
            <div className="row" >
              <div className="col-sm-5" >
                <div className="row mt-5">
                  <BackGroundColorPicker></BackGroundColorPicker>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="col-12 ms-3 my-4 h6">
                <BackGroundOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></BackGroundOpacityRangeBar>
                </div>
              </div>
          </div>
        </div>
      </Collapse>
    </>
  );
}
