import * as React from 'react';
import Radio from '../../../../../../node_modules/@mui/material/Radio/Radio';
import RadioGroup from '../../../../../../node_modules/@mui/material/RadioGroup/RadioGroup';
import FormControlLabel from '../../../../../../node_modules/@mui/material/FormControlLabel/FormControlLabel';
import FormControl from '../../../../../../node_modules/@mui/material/FormControl/FormControl';
import { StrokeEdgeRadioButtonContext } from '../providers/Stroke/StrokeEdgeRadioButtonProvider';
import { StrokeActivateSwitchContext } from '../providers/Stroke/StrokeActivateSwitchProvider';

export default function StrokeEdgeRadioButtons()
{
  const { checked } = React.useContext(StrokeActivateSwitchContext);
  const { value, setValue } = React.useContext(StrokeEdgeRadioButtonContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="outer"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel disabled={!checked} value="inner" control={<Radio />} label="内側" />
        <FormControlLabel disabled={!checked} value="outer" control={<Radio />} label="外側" />
      </RadioGroup>
    </FormControl>
  );
}
