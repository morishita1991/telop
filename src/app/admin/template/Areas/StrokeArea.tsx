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
  max-width: 1080px;
`;
const SDiv3 = styled.div`
  max-width: 980px;
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
                  <div className="row p-3 ms-3">
                    <SDiv4 className="col-sm-4 pt-4 mt-2 mb-3 me-4">
                      <StrokeEdgeRadioButtons></StrokeEdgeRadioButtons>
                    </SDiv4>
                    <SDiv5 className="col-sm-4 me-5">
                      <StrokeWidthRangeBar text={'太さ'} min={0} max={20} step={1}></StrokeWidthRangeBar>
                    </SDiv5>
                    <SDiv5 className="col-sm-4 ms-3 mt-5">
                      <StrokeColorPicker></StrokeColorPicker>
                    </SDiv5>
                    <SDiv5 className="col-sm-4">
                      <StrokeOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></StrokeOpacityRangeBar>
                    </SDiv5>
                  </div>
                </div>
              </SDiv3>
              <div className="col-sm-1 m-2">
                <div className="col-12 mt-4 pt-3 h6">
                  <p className="mt-2 mb-2">追加</p>
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
