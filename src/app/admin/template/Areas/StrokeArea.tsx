import React, { useContext } from 'react';
import styled from "styled-components";
import Collapse from '../../../../../node_modules/@mui/material/Collapse/Collapse';
import Button from '../../../../../node_modules/@mui/material/Button/Button';
import StrokeColorPicker from '../components/Stroke/StrokeColorPicker';
import StrokeEdgeRadioButtons from '../components/Stroke/StrokeEdgeRadioButtons';
import StrokeOpacityRangeBar from '../components/Stroke/StrokeOpacityRangeBar';
import StrokeWidthRangeBar from '../components/Stroke/StrokeWidthRangeBar';
import { StrokeCheckButtonContext } from "../components/providers/Stroke/StrokeCheckButtonProvider";

const SDiv2 = styled.div`
  max-width: 445px;
`;
const SDiv3 = styled.div`
  max-width: 350px;
`;
const SDiv4 = styled.div`
  max-width: 150px;
`;
const SDiv5 = styled.div`
  max-width: 200px;
`;

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
          <SDiv2 className="border ms-3 mb-5">
            <div className="row">
              <SDiv3 className="col-sm-11">
                <div className="row border m-3 me-3 h6">
                  <div className="row mx-4 my-4">
                    <div className="row my-4">
                      <StrokeEdgeRadioButtons></StrokeEdgeRadioButtons>
                    </div>
                    <div className="row my-4">
                      <StrokeWidthRangeBar text={'太さ'} min={0} max={20} step={1}></StrokeWidthRangeBar>
                    </div>
                    <div className="row my-4">
                      <StrokeColorPicker></StrokeColorPicker>
                    </div>
                    <div className="row my-4">
                      <StrokeOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></StrokeOpacityRangeBar>
                    </div>
                  </div>
                </div>
              </SDiv3>
              <div className="col-sm-1 m-2">
                <div className="col-12 mt-5">
                  <button
                    type="button"
                    className="btn btn-secondary rounded-circle p-0"
                    style={{ width: '2rem', height: '2rem' }}>
                    ＋
                  </button>
                </div>
              </div>
            </div>
          </SDiv2>
      </Collapse>
    </>
  );
}
