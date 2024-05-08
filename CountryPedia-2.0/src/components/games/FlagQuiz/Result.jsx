import React from "react";
import styled from "@emotion/styled";

const ResultBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: white;
`;

function Result({ resultMessage }) {
  return (
    <ResultBox>
      <h2>{resultMessage}</h2>
    </ResultBox>
  );
}

export default Result;
