import React, { useContext } from "react";
import { ShadowSizeRangeBarContext } from "../providers/Shadow/ShadowSizeRangeBarProvider";
import Box from '../../../../../../node_modules/@mui/material/Box/Box';
import Slider from '../../../../../../node_modules/@mui/material/Slider/Slider';
import styled from "styled-components";

type Props = {
  text: string,
  min: number,
  max: number,
  step: number,
}

export default function ShadowSizeRangeBar(prop: Props) {
  const { text, min, max, step } = prop;
  const { rangeValue, setRangeValue } = useContext(ShadowSizeRangeBarContext);

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
          ></SInput>
        </div>
        <div className="col-12">
          <Box sx={{ width: '125px' }}>
            <Slider
              valueLabelDisplay="auto"
              value={rangeValue}
              onChange={handleChange}
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
  max-width: 75px;
  display: inline-block;
`;
