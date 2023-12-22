import React, { useContext } from "react";
import Box from '@mui/material/Box/Box';
import Slider from '@mui/material/Slider/Slider';
import { GradationSliderContext } from "../providers/Gradation/GradationSliderProvider";

type Props = {
  min: number,
  max: number,
  step: number,
}

export default function GradationSlider(prop: Props) {
  const { min, max, step } = prop;
  const { rangeValue, setRangeValue } = useContext(GradationSliderContext);

  const handleChange = (event: any) => {
    setRangeValue(Number(event.target.value));
  }
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Box sx={{ maxWidth: '300px' }}>
            <Slider
              valueLabelDisplay="auto"
              value={rangeValue}
              onChange={handleChange}
              marks
              track={false}
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
