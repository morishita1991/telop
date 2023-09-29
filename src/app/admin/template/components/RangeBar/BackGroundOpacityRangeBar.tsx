import React, { useId, useContext } from "react";
import { BackGroundOpacityRangeBarContext } from "../providers/RangeBar/BackGroundOpacityRangeBarProvider";
import styled from "styled-components";

type Props = {
  text: string,
  min: number,
  max: number,
  step: number,
}

export default function BackGroundOpacityRangeBar(prop: Props) {
  const { text, min, max, step } = prop;
  const { rangeValue, setRangeValue } = useContext(BackGroundOpacityRangeBarContext);
  const RangeBarInputId = useId();
  const RangeBarId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  }
  return (
    <>
      <div className="row">
        <div className="col-12 mb-2">
          <SSpan>{text}</SSpan>
          <SInput type="text" className="form-control ms-2"
            id={RangeBarInputId}
            value={rangeValue}
            onChange={handleChange}
          ></SInput>
        </div>
        <div className="col-12">
          <SInput2 type="range" className="form-range"
            min={min} max={max} step={step}
            id={RangeBarId}
            value={rangeValue}
            onChange={handleChange}
          ></SInput2>
        </div>
      </div>
    </>
  );
}

const SSpan = styled.div`
  display: inline-block;
`;

const SInput = styled.input`
  max-width: 60px;
  display: inline-block;
`;

const SInput2 = styled.input`
  max-width: 200px;
`;
