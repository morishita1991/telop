import React, { useContext } from "react";
import Checkbox from "../../../../../../node_modules/@mui/material/Checkbox/Checkbox";
import { FormGroup, FormControlLabel } from "../../../../../../node_modules/@mui/material/index";
import { StrokeCheckBoxContext } from "../providers/Stroke/StrokeCheckBoxProvider";

export default function StrokeCheckBox() {
  const { isChecked, setIsChecked } = useContext(StrokeCheckBoxContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <FormGroup>
        <FormControlLabel control={
          <Checkbox
            checked={isChecked}
            onChange={handleChange}
          />
        } label="ストローク"
        />
      </FormGroup>
    </>
  );
}
