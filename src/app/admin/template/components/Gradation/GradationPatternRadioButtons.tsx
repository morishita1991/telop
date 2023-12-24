import * as React from 'react';
import Radio from '@mui/material/Radio/Radio';
import RadioGroup from '@mui/material/RadioGroup/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import FormControl from '@mui/material/FormControl/FormControl';
import { GradationPatternRadioButtonContext } from '../providers/Gradation/GradationPatternRadioButtonProvider';
import { GradationActivateSwitchContext } from '../providers/Gradation/GradationActivateSwitchProvider';

export default function GradationPatternRadioButtons()
{
  const { checked } = React.useContext(GradationActivateSwitchContext);
  const { value, setValue } = React.useContext(GradationPatternRadioButtonContext);
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
        <FormControlLabel disabled={!checked} value="two" control={<Radio />} label="2色" />
        <FormControlLabel disabled={!checked} value="three" control={<Radio />} label="3色" />
      </RadioGroup>
    </FormControl>
  );
}
