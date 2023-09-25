import React, { useId, useState } from "react";
import styled from "styled-components";

type Props = {
  text: string,
  defaultValue: number,
  min: number,
  max: number,
  step: number,
}

export default function RangeBar(prop: Props) {
  const { text, defaultValue, min, max, step } = prop;
  const [ value, setValue ] = useState(defaultValue);
  const RangeBarInputId = useId();
  const RangeBarId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  }
  return (
    <>
      <div className="row">
        <div className="col-12 pt-3 mb-2 mt-3">
          <SSpan>{text}</SSpan>
          <SInput type="text" className="form-control ms-2"
            id={RangeBarInputId}
            defaultValue={defaultValue}
            value={value}
            onChange={handleChange}
          ></SInput>
        </div>
        <div className="col-12">
          <SInput2 type="range" className="form-range"
            min={min} max={max} step={step}
            id={RangeBarId}
            defaultValue={defaultValue}
            value={value}
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
