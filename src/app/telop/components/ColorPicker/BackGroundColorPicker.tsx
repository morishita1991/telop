import React, { useId, useContext } from "react";
import styled from "styled-components";
import { BackGroundColorContext } from "../providers/ColorPicker/BackGroundColorProvider";

export default function BackGroundColorPicker() {
  const textInputId = useId();
  const colorInputId = useId();
  const { bgColorValue, setBgColorValue } = useContext(BackGroundColorContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColorValue(e.target.value);
  }
  return (
    <>
      <div className="row">
          <SInput
            type="color"
            className="form-control form-control-color"
            id={colorInputId}
            name="color"
            value={bgColorValue}
            onChange={handleChange}
          ></SInput>
          <SInput
            type="text"
            className="form-control ms-2"
            id={textInputId}
            value={bgColorValue}
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
