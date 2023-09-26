import React from "react";
import styled from "styled-components";

type Props = {
  text: string
};

export default function SubTitle(props: Props) {
  return (
    <>
      <SDiv>
        <span className="h4 m-3 align-top">{ props.text }</span>
      </SDiv>
    </>
  );
}

const SDiv = styled.div`
  max-height: 30px;
`;
