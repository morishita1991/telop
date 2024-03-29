import React, { useContext } from "react";
import { StrokeOpacityRangeBarContext } from "../providers/Stroke/StrokeOpacityRangeBarProvider";
import Box from '@mui/material/Box/Box';
import Slider from '@mui/material/Slider/Slider';
import styled from "styled-components";
import { StrokeActivateSwitchContext } from "../providers/Stroke/StrokeActivateSwitchProvider";

type Props = {
  text: string,
  min: number,
  max: number,
  step: number,
}

export default function StrokeOpacityRangeBar(prop: Props) {
  const { text, min, max, step } = prop;
  const { checked } = useContext(StrokeActivateSwitchContext);
  const { rangeValue, setRangeValue } = useContext(StrokeOpacityRangeBarContext);

  const handleChange = (event: any) => {
    setRangeValue(Number(event.target.value));
  }
  return (
    <>
      <div className="row">
        <div className="col-12 pt-3 mb-2 mt-3">
          <SSpan>{text}</SSpan>
          <SInput type="number" className="form-control ms-2"
            value={rangeValue}
            onChange={handleChange}
            step={step}
            min={min}
            max={max}
            disabled={!checked}
          ></SInput>
        </div>
        <div className="col-12">
          <Box sx={{ maxWidth: '200px' }}>
            <Slider
              valueLabelDisplay="auto"
              value={rangeValue}
              onChange={handleChange}
              marks
              step={step}
              min={min}
              max={max}
              disabled={!checked}
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
  max-width: 65px;
  display: inline-block;
`;
