import React, { useId, useContext } from "react";
import styled from "styled-components";
import { BackGroundCheckBoxContext } from "../providers/BackGround/BackGroundCheckBoxProvider ";
import { BackGroundColorContext } from "../providers/BackGround/BackGroundColorProvider";

export default function BackGroundColorPicker() {
  const textInputId = useId();
  const colorInputId = useId();
  const { bgColorValue, setBgColorValue } = useContext(BackGroundColorContext);
  const { isChecked } = useContext(BackGroundCheckBoxContext);
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
            disabled={!isChecked}
          ></SInput>
          <SInput
            type="text"
            className="form-control ms-2"
            id={textInputId}
            value={bgColorValue}
            onChange={handleChange}
            disabled={!isChecked}
          ></SInput>
      </div>
    </>
  );
}


const SInput = styled.input`
  max-width: 100px;
  display: inline-block;
`;
