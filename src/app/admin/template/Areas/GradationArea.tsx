import React, { useContext } from 'react';
import Collapse from '@mui/material/Collapse/Collapse';
import styled from "styled-components";
import IconButton from '@mui/material/IconButton/IconButton';
import Switch from '@mui/material/Switch';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { GradationCheckButtonContext } from "../components/providers/Gradation/GradationCheckButtonProvider";
import GradationLeftColorPicker from '../components/Gradation/GradationLeftColorPicker';
import GradationCenterColorPicker from '../components/Gradation/GradationCenterColorPicker';
import GradationRightColorPicker from '../components/Gradation/GradationRightColorPicker';
import GradationSlider from '../components/Gradation/GradationSlider';
import GradationPatternRadioButtons from '../components/Gradation/GradationPatternRadioButtons';
import { GradationPatternRadioButtonContext } from '../components/providers/Gradation/GradationPatternRadioButtonProvider';
import GradationAngleRangeBar from '../components/Gradation/GradationAngleRangeBar';
import { GradationActivateSwitchContext } from '../components/providers/Gradation/GradationActivateSwitchProvider';

const Div = styled.div`
    &:hover {
    background-color: #f5f5f5;
    border-radius: 6px;
    cursor: pointer;
    transition: .4s;
  }
`;

export default function GradationArea() {
  const { checked, setChecked } = useContext(GradationActivateSwitchContext);
  const { open, setOpen } = useContext(GradationCheckButtonContext);
  const { value: pattern } = useContext(GradationPatternRadioButtonContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const gradCenterColorPicker = () => {
    return pattern === 'three' ? (<GradationCenterColorPicker></GradationCenterColorPicker>) : <></>;
  }

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
          <label className="h6" style={{cursor: 'pointer'}} onClick={handleClick}>グラデーション</label>
        </div>
        <div className='ms-auto'>
          <Switch
            checked={checked}
            onChange={handleChange} />
        </div>
      </Div>
      <Collapse in={open}>
          <div className="mb-5" style={{ minWidth: '300px', maxWidth: '400px' }}>
            <div className="row bg-light m-3 h6">
              <div className="row mx-4 mb-2">
                <GradationAngleRangeBar text={'角度'} min={0} max={360} step={1}></GradationAngleRangeBar>
              </div>
              <div className="row m-4">
                <GradationPatternRadioButtons></GradationPatternRadioButtons>
              </div>
              <div className="col-sm-4" style={{ maxWidth: '200px' }}>
                <GradationLeftColorPicker></GradationLeftColorPicker>
              </div>
              <div className="col-sm-4" style={{ maxWidth: '200px' }}>
                {gradCenterColorPicker()}
              </div>
              <div className="col-sm-4" style={{ maxWidth: '200px' }}>
                <GradationRightColorPicker></GradationRightColorPicker>
              </div>
              <div className="row ms-2 ps-3 mt-3">
                <GradationSlider min={0} max={1} step={0.05}></GradationSlider>
              </div>
            </div>
          </div>
      </Collapse>
    </>
  );
}
