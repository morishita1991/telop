import React, { useContext } from 'react';
import styled from "styled-components";
import Collapse from '../../../../../node_modules/@mui/material/Collapse/Collapse';
import Button from '../../../../../node_modules/@mui/material/Button/Button';
import { ShadowCheckButtonContext } from '../components/providers/Shadow/ShadowCheckButtonProvider';
import ShadowDistanceRangeBar from '../components/Shadow/ShadowDistanceRangeBar';
import ShadowAngleRangeBar from '../components/Shadow/ShadowAngleRangeBar';
import ShadowColorPicker from '../components/Shadow/ShadowColorPicker';
import ShadowOpacityRangeBar from '../components/Shadow/ShadowOpacityRangeBar';

const SDiv2 = styled.div`
  max-width: 300px;
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

export default function ShadowArea() {
  const { open, setOpen } = useContext(ShadowCheckButtonContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="d-flex flex-row mb-3 h4">
        <Button variant="outlined" color="primary" size="small" onClick={handleClick}>
          影
        </Button>
      </div>
      <Collapse in={open}>
          <SDiv2 className="border ms-3 mb-5">
            <div className="row mx-4 my-3 h6">
              <div className="row mb-1">
                <ShadowDistanceRangeBar text={'距離'} min={0} max={100} step={1}></ShadowDistanceRangeBar>
              </div>
              <div className="row my-1">
                <ShadowAngleRangeBar text={'角度'} min={0} max={360} step={1}></ShadowAngleRangeBar>
              </div>
              <div className="row ms-1 mt-5" style={{ maxWidth: '200px' }}>
                <ShadowColorPicker></ShadowColorPicker>
              </div>
              <div className="row my-1">
                <ShadowOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></ShadowOpacityRangeBar>
              </div>
            </div>
          </SDiv2>
      </Collapse>
    </>
  );
}
