import React, { useId } from "react";

function TextInput() {
  const textInputId = useId();
  return (
    <>
      <div className="row">
        <div className="col-12 mb-3">
          <div className="mt-5">
            <input type="text" className="form-control" id={ textInputId } placeholder="文字を入力" defaultValue="サンプル"></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextInput;
