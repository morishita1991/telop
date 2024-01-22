import React, { useContext } from "react";
import { BackGroundOpacityRangeBarContext } from "../providers/BackGround/BackGroundOpacityRangeBarProvider";
import styled from "styled-components";
import Box from '@mui/material/Box/Box';
import Slider from '@mui/material/Slider/Slider';
import { BackGroundActivateSwitchContext } from "../providers/BackGround/BackGroundActivateSwitchProvider";

type Props = {
  text: string,
  min: number,
  max: number,
  step: number,
}

export default function BackGroundOpacityRangeBar(prop: Props) {
  const { text, min, max, step } = prop;
  const { rangeValue, setRangeValue } = useContext(BackGroundOpacityRangeBarContext);
  const { checked } = React.useContext(BackGroundActivateSwitchContext);

  const handleChange = (event: any) => {
    setRangeValue(Number(event.target.value));
  }
  return (
    <>
      <div className="row">
        <div className="col-12 mb-2">
          <SSpan>{text}</SSpan>
          <SInput type="number" className="form-control ms-2"
            value={rangeValue}
            disabled={!checked}
            onChange={handleChange}
            step={step}
            min={min}
            max={max}
          ></SInput>
        </div>
        <div className="col-12">
          <Box sx={{ maxWidth: '200px' }}>
            <Slider
              valueLabelDisplay="auto"
              value={rangeValue}
              disabled={!checked}
              onChange={handleChange}
              marks
              step={step}
              min={min}
              max={max}
            />
          </Box>
        </div>
      </div>
    </>
  );
}

const SSpan = styled.div`
  display: inline-block;
`;

const SInput = styled.input`
  max-width: 80px;
  display: inline-block;
`;
