import React, { useContext } from "react";
import Checkbox from "../../../../../../node_modules/@mui/material/Checkbox/Checkbox";
import { FormGroup, FormControlLabel } from "../../../../../../node_modules/@mui/material/index";
import { BackGroundCheckBoxContext } from "../providers/BackGround/BackGroundCheckBoxProvider ";

export default function BackGroundCheckBox() {
  const { isChecked, setIsChecked } = useContext(BackGroundCheckBoxContext);
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
        } label="背景を設定"
        />
      </FormGroup>
    </>
  );
}
