import React, { useContext } from "react";
import { TextFontContext } from "./providers/Text/TextFontProvider";
import { FormControl, InputLabel, MenuItem } from "@mui/material/index";
import Select, { SelectChangeEvent } from "@mui/material/Select/Select";

export default function FontSelect() {
  const { fontValue, setFontValue } = useContext(TextFontContext);
  const fontFamily = [
    // 日本語
    'Kosugi', 'Noto Sans Japanese', 'Kiwi Maru',
    // 英語
    'Coiny', 'Squada One', 'Audiowide', 'Abril Fatface',
  ];
  const handleChange = (event: SelectChangeEvent) => {
    setFontValue(event.target.value);
  }
  return (
    <>
      <div className="row">
        <div className="col-10">
          <FormControl sx={{ m: 1, maxWidth: 200 }}>
            <InputLabel id="demo-simple-select-label">フォント選択</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={fontValue}
              style={{ fontFamily: fontValue }}
              label={'フォント選択'}
              onChange={handleChange}
            >
              {fontFamily.map((font) => {
                return <MenuItem
                    style={{ fontSize: '20px', fontFamily: font }}
                    key={font}
                    value={font}
                  >
                    {font}
                  </MenuItem>
              })}
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
}
