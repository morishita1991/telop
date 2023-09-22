import React, { useId } from "react";

function FontSelect() {
  const fontButtonId = useId();
  const fontListId = useId();
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="mt-5">
            <button className="btn btn-secondary dropdown-toggle" type="button" id={ fontButtonId } data-bs-toggle="dropdown" aria-expanded="false">
              フォントを選択
            </button>
            <ul className="dropdown-menu" id={ fontListId } aria-labelledby={ fontButtonId }>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default FontSelect;
