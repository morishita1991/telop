import React, { useId, useState, useContext } from "react";
import styled from "styled-components";
import { TextColorContext } from "./providers/TextColorProvider";

export default function ColorPicker() {
  const textInputId = useId();
  const colorInputId = useId();
  const { colorValue, setColorValue } = useContext(TextColorContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(e.target.value);
  }
  return (
    <>
      <div className="row">
        <div className="col-12 pt-2 mb-2 mt-3">
          <SSpan>色</SSpan>
          <SInput
            type="text"
            className="form-control ms-2"
            id={textInputId}
            value={colorValue}
            onChange={handleChange}
          ></SInput>
        </div>
        <div className="col-12">
          <input
            type="color"
            className="form-control form-control-color"
            id={colorInputId}
            name="color"
            value={colorValue}
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </>
  );
}

const SSpan = styled.span`
  display: inline-block;
`;

const SInput = styled.input`
  max-width: 100px;
  display: inline-block;
`;
