import React from "react";
import styled from "@emotion/styled";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Flag = styled.img`
  width: auto;
  height: 260px;
  border-radius: 8px;
`;

function Question({ flag }) {
  return (
    <>
      <QuestionContainer>
        <h2>Which country does this flag belong to?</h2>;
        <Flag src={flag} alt="" />
      </QuestionContainer>
    </>
  );
}

export default Question;
