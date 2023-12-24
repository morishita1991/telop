import React, { useContext } from "react";
import { ShadowAngleRangeBarContext } from "../providers/Shadow/ShadowAngleRangeBarProvider";
import Box from '../../../../../../node_modules/@mui/material/Box/Box';
import Slider from '../../../../../../node_modules/@mui/material/Slider/Slider';
import styled from "styled-components";
import { ShadowActivateSwitchContext } from "../providers/Shadow/ShadowActivateSwitchProvider";

type Props = {
  text: string,
  min: number,
  max: number,
  step: number,
}

export default function ShadowAngleRangeBar(prop: Props) {
  const { text, min, max, step } = prop;
  const { checked } = useContext(ShadowActivateSwitchContext);
  const { rangeValue, setRangeValue } = useContext(ShadowAngleRangeBarContext);

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
  max-width: 75px;
  display: inline-block;
`;
