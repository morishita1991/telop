import * as React from 'react';
import Radio from '../../../../../../node_modules/@mui/material/Radio/Radio';
import RadioGroup from '../../../../../../node_modules/@mui/material/RadioGroup/RadioGroup';
import FormControlLabel from '../../../../../../node_modules/@mui/material/FormControlLabel/FormControlLabel';
import FormControl from '../../../../../../node_modules/@mui/material/FormControl/FormControl';

export default function StrokeEdgeRadioButtons()
{
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="outer"
        name="radio-buttons-group"
      >
        <FormControlLabel value="inner" control={<Radio />} label="内側" />
        <FormControlLabel value="outer" control={<Radio />} label="外側" />
      </RadioGroup>
    </FormControl>
  );
}
