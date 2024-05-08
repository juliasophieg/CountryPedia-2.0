import React from "react";
import styled from "@emotion/styled";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  @media (max-width: 500px) {
  }
`;

const Flag = styled.img`
  height: 290px;
  max-width: 437px;
  width: auto;
  border-radius: 8px;
  opacity: 0.9;
  @media (max-width: 500px) {
    height: 220px;
    width: 100%;
  }
`;

function Question({ flag }) {
  return (
    <>
      <QuestionContainer>
        <h2>Which country is this?</h2>;
        <Flag src={flag} alt="" />
      </QuestionContainer>
    </>
  );
}

export default Question;
