import React, { useContext } from 'react';
import Collapse from '../../../../../node_modules/@mui/material/Collapse/Collapse';
import IconButton from '../../../../../node_modules/@mui/material/IconButton/IconButton';
import ExpandCircleDownIcon from '../../../../../node_modules/@mui/icons-material/ExpandCircleDown';
import StrokeColorPicker from '../components/Stroke/StrokeColorPicker';
import StrokeEdgeRadioButtons from '../components/Stroke/StrokeEdgeRadioButtons';
import StrokeOpacityRangeBar from '../components/Stroke/StrokeOpacityRangeBar';
import StrokeWidthRangeBar from '../components/Stroke/StrokeWidthRangeBar';
import { StrokeCheckButtonContext } from "../components/providers/Stroke/StrokeCheckButtonProvider";

export default function StrokeArea() {
  const { open, setOpen } = useContext(StrokeCheckButtonContext);

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
          <label className="h6" htmlFor="textLabel" onClick={handleClick}>ストローク</label>
        </div>
      </div>
      <Collapse in={open}>
          <div className="mb-5" style={{ minWidth: '300px', maxWidth: '400px' }}>
            <div className="row border m-3 h6">
                <div className="row ms-3 mt-4">
                  <StrokeEdgeRadioButtons></StrokeEdgeRadioButtons>
                </div>
                <div className="row ms-3">
                  <StrokeWidthRangeBar text={'太さ'} min={0} max={20} step={1}></StrokeWidthRangeBar>
                </div>
                <div className="row ms-4 mt-5" style={{ maxWidth: '200px' }}>
                  <StrokeColorPicker></StrokeColorPicker>
                </div>
                <div className="row ms-3">
                  <StrokeOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></StrokeOpacityRangeBar>
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
