import * as React from 'react';
import Radio from '../../../../../../node_modules/@mui/material/Radio/Radio';
import RadioGroup from '../../../../../../node_modules/@mui/material/RadioGroup/RadioGroup';
import FormControlLabel from '../../../../../../node_modules/@mui/material/FormControlLabel/FormControlLabel';
import FormControl from '../../../../../../node_modules/@mui/material/FormControl/FormControl';
import { StrokeEdgeRadioButtonContext } from '../providers/Stroke/StrokeEdgeRadioButtonProvider';

export default function StrokeEdgeRadioButtons()
{
  const { value, setValue } = React.useContext(StrokeEdgeRadioButtonContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="outer"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="inner" control={<Radio />} label="内側" />
        <FormControlLabel value="outer" control={<Radio />} label="外側" />
      </RadioGroup>
    </FormControl>
  );
}
