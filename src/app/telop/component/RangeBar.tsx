import React, { useId } from "react";

type Props = {
  text: string,
  defaultValue: number,
  min: number,
  max: number,
  step: number,
}

function RangeBar(prop: Props) {
  const { text, defaultValue, min, max, step } = prop;
  const RangeBarInputId = useId();
  const RangeBarId = useId();
  return (
    <>
      <div className="row">
        <div className="col-12 pt-3 mb-2 mt-3">
          <span style={{ display: 'inline-block' }}>{text}</span>
          <input type="text" className="form-control ms-2"
            id={RangeBarInputId}
            defaultValue={defaultValue}
            style={{ maxWidth: '60px', display: 'inline-block' }}
          ></input>
        </div>
        <div className="col-12">
          <input type="range" className="form-range"
            min={min} max={max} step={step}
            id={RangeBarId}
            defaultValue={defaultValue}
            style={{ maxWidth: '200px' }}
          ></input>
        </div>
      </div>
    </>
  );
}

export default RangeBar;
