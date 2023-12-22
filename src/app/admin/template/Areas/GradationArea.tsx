import React, { useContext } from 'react';
import Collapse from '@mui/material/Collapse/Collapse';
import IconButton from '@mui/material/IconButton/IconButton';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { GradationCheckButtonContext } from "../components/providers/Gradation/GradationCheckButtonProvider";
import GradationLeftColorPicker from '../components/Gradation/GradationLeftColorPicker';
import GradationCenterColorPicker from '../components/Gradation/GradationCenterColorPicker';
import GradationRightColorPicker from '../components/Gradation/GradationRightColorPicker';
import GradationSlider from '../components/Gradation/GradationSlider';

export default function GradationArea() {
  const { open, setOpen } = useContext(GradationCheckButtonContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="row border-bottom mx-4 h4">
        <div className="ms-2">
          <IconButton>
            <ExpandCircleDownIcon
              id="textLabel"
              fontSize="medium"
              color="success"
              sx={{ display: !open ? 'block' : 'none' }}
              onClick={handleClick} />
            <ExpandCircleDownIcon
              id="textLabel"
              fontSize="medium"
              color="success"
              sx={{ display: open ? 'block' : 'none' }}
              onClick={handleClick}
              style={{ transform: 'scale(1, -1)' }} />
          </IconButton>
          <label className="h6" htmlFor="textLabel" onClick={handleClick}>グラデーション</label>
        </div>
      </div>
      <Collapse in={open}>
          <div className="mb-5" style={{ minWidth: '300px', maxWidth: '400px' }}>
            <div className="row border m-3 h6">
                <div className="col-sm-4" style={{ maxWidth: '200px' }}>
                  <GradationLeftColorPicker></GradationLeftColorPicker>
                </div>
                <div className="col-sm-4" style={{ maxWidth: '200px' }}>
                  <GradationCenterColorPicker></GradationCenterColorPicker>
                </div>
                <div className="col-sm-4" style={{ maxWidth: '200px' }}>
                  <GradationRightColorPicker></GradationRightColorPicker>
                </div>
                <div className="row ms-3">
                  <GradationSlider min={0} max={1} step={0.1}></GradationSlider>
                </div>
            </div>
            <div className="row m-4">
              <button
                type="button"
                className="btn btn-secondary rounded-circle p-0"
                style={{ width: '2rem', height: '2rem' }}>
                ＋
              </button>
            </div>
          </div>
      </Collapse>
    </>
  );
}
