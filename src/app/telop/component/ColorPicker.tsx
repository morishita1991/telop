import React from "react";
import styled from "styled-components";

function ColorPicker() {
  return (
    <>
      <div className="row">
        <div className="col-12 pt-2 mb-2 mt-3">
          <SSpan>色</SSpan>
          <SInput type="text" className="form-control ms-2" id="input-color-text" defaultValue="#00CCFF"></SInput>
        </div>
        <div className="col-12">
          <input type="color" className="form-control form-control-color" id="color-text" name="color" defaultValue="#00CCFF"></input>
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

export default ColorPicker;
