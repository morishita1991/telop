import React, { useId, useContext } from "react";
import styled from "styled-components";
import { StrokeActivateSwitchContext } from "../providers/Stroke/StrokeActivateSwitchProvider";
import { StrokeColorContext } from "../providers/Stroke/StrokeColorProvider";

export default function StrokeColorPicker() {
  const textInputId = useId();
  const colorInputId = useId();
  const { colorValue, setColorValue } = useContext(StrokeColorContext);
  const { checked } = React.useContext(StrokeActivateSwitchContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 8)
    {
      setColorValue(e.target.value);
    }
  }
  return (
    <>
      <SInput
        type="color"
        className="form-control form-control-color"
        id={colorInputId}
        name="color"
        value={colorValue}
        onChange={handleChange}
        disabled={!checked}
      ></SInput>
      <SInput
        type="text"
        className="form-control ms-2"
        id={textInputId}
        value={colorValue}
        onChange={handleChange}
        disabled={!checked}
      ></SInput>
    </>
  );
}

const SInput = styled.input`
  max-width: 100px;
  display: inline-block;
`;
