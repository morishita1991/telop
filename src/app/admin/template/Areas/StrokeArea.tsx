import React, { useContext } from 'react';
import Collapse from '../../../../../node_modules/@mui/material/Collapse/Collapse';
import Button from '../../../../../node_modules/@mui/material/Button/Button';
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
      <div className="d-flex flex-row mb-3 h4">
        <Button variant="outlined" color="primary" size="small" onClick={handleClick}>
          ストローク
        </Button>
      </div>
      <Collapse in={open}>
          <div className="border mb-5" style={{ maxWidth: '400px' }}>
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
