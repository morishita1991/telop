import React, { useId, useContext } from "react";
import styled from "styled-components";
import { GradationLeftColorContext } from "../providers/Gradation/GradationLeftColorProvider";

export default function GradationLeftColorPicker() {
  const textInputId = useId();
  const colorInputId = useId();
  const { colorValue, setColorValue } = useContext(GradationLeftColorContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 8)
    {
      setColorValue(e.target.value);
    }
  }
  return (
    <>
      <SInput
        type="text"
        className="form-control m-2"
        id={textInputId}
        style={{ fontSize: '13px' }}
        value={colorValue}
        onChange={handleChange}
      ></SInput>
      <SInput
        type="color"
        className="form-control form-control-color ms-4"
        id={colorInputId}
        name="color"
        value={colorValue}
        onChange={handleChange}
      ></SInput>
    </>
  );
}

const SInput = styled.input`
  max-width: 88px;
  display: inline-block;
`;
