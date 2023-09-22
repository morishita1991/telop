import React from "react";

type Props = {
  text: string
};

function SubTitle(props: Props) {
  return (
    <>
      <div style={{ maxHeight: '30px' }}>
        <span className="h4 m-3 align-top">{ props.text }</span>
      </div>
    </>
  );
}

export default SubTitle;
