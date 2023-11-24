import React, { useId, useContext } from "react";
import styled from "styled-components";
import { TextColorContext } from "../providers/ColorPicker/TextColorProvider";

export default function TextColorPicker() {
  const textInputId = useId();
  const colorInputId = useId();
  const { colorValue, setColorValue } = useContext(TextColorContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(e.target.value);
  }
  return (
    <>
      <div className="row">
        <SInput
          type="color"
          className="form-control form-control-color"
          id={colorInputId}
          name="color"
          value={colorValue}
          onChange={handleChange}
        ></SInput>
        <SInput
          type="text"
          className="form-control ms-2"
          id={textInputId}
          value={colorValue}
          onChange={handleChange}
        ></SInput>
      </div>
    </>
  );
}

const SInput = styled.input`
  max-width: 100px;
  display: inline-block;
`;
