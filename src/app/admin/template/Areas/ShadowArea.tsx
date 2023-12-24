import React, { useContext } from 'react';
import styled from "styled-components";
import Collapse from '../../../../../node_modules/@mui/material/Collapse/Collapse';
import IconButton from '../../../../../node_modules/@mui/material/IconButton/IconButton';
import ExpandCircleDownIcon from '../../../../../node_modules/@mui/icons-material/ExpandCircleDown';
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
      <div className="row border-bottom mx-4 h4">
        <div className="ms-2">
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
          <label className="h6" onClick={handleClick}>影</label>
        </div>
      </div>
      <Collapse in={open}>
          <SDiv2 className="mb-5" style={{ minWidth: '300px', maxWidth: '400px' }}>
            <div className="row bg-light m-3 h6">
              <div className="row ms-3 mb-1">
                <ShadowDistanceRangeBar text={'距離'} min={0} max={100} step={1}></ShadowDistanceRangeBar>
              </div>
              <div className="row ms-3 my-1">
                <ShadowAngleRangeBar text={'角度'} min={0} max={360} step={1}></ShadowAngleRangeBar>
              </div>
              <div className="row ms-4 mt-5" style={{ maxWidth: '200px' }}>
                <ShadowColorPicker></ShadowColorPicker>
              </div>
              <div className="row ms-3 mb-2">
                <ShadowOpacityRangeBar text={'不透明度'} min={0} max={1} step={0.1}></ShadowOpacityRangeBar>
              </div>
            </div>
          </SDiv2>
      </Collapse>
    </>
  );
}
