import React, { useId, useContext } from "react";
import styled from "styled-components";
import { ShadowActivateSwitchContext } from "../providers/Shadow/ShadowActivateSwitchProvider";
import { ShadowColorContext } from "../providers/Shadow/ShadowColorProvider";

export default function ShadowColorPicker() {
  const textInputId = useId();
  const colorInputId = useId();
  const { checked } = useContext(ShadowActivateSwitchContext);
  const { colorValue, setColorValue } = useContext(ShadowColorContext);
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
