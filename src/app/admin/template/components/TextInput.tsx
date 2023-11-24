import React, { useContext } from "react";
import { TextInputContext } from "./providers/Text/TextInputProvider";

export default function TextInput() {
  const { textValue, setTextValue } = useContext(TextInputContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };
  return (
    <>
      <div className="row">
        <div className="col-12 mb-3">
          <div className="mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="文字を入力"
              value={textValue}
              onChange={handleChange}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
