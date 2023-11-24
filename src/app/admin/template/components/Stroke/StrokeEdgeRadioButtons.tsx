import * as React from 'react';
import Radio from '../../../../../../node_modules/@mui/material/Radio/Radio';
import RadioGroup from '../../../../../../node_modules/@mui/material/RadioGroup/RadioGroup';
import FormControlLabel from '../../../../../../node_modules/@mui/material/FormControlLabel/FormControlLabel';
import FormControl from '../../../../../../node_modules/@mui/material/FormControl/FormControl';
import FormLabel from '../../../../../../node_modules/@mui/material/FormLabel/FormLabel';

export default function StrokeEdgeRadioButtons()
{
  // return (
  //   <>
  //     <div className="form-check">
  //         <input
  //           type="radio"
  //           className="form-check-input"
  //           name="strokeEdge"
  //         >
  //         </input>
  //         <label
  //           className="form-check-label"
  //         >
  //           内側
  //         </label>
  //       </div>
  //       <div className="form-check">
  //         <input
  //           type="radio"
  //           className="form-check-input"
  //           name="strokeEdge"
  //           checked
  //         >
  //         </input>
  //         <label
  //           className="form-check-label"
  //         >
  //           外側
  //         </label>
  //       </div>
  //   </>
  // );

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
