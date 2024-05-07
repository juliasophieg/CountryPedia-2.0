import React from "react";
import styled from "@emotion/styled";

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100vw;
  max-width: 1000px;
  @media (max-width: 500px) {
    padding: 0 2rem;
  }
`;

const Option = styled.button`
  width: 33%;
  min-width: 212px;
  max-width: 350px;
  background-color: white;
  transition: background-color 0.3s;
  &:hover {
    background-color: #737dd6;
    color: white;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    min-width: unset;
    max-width: unset;
    width: 100%;
  }
`;

function AnswerOptions({ answers, handleAnswerClick }) {
  return (
    <OptionsContainer>
      {answers.map((answer, index) => (
        <Option key={index} onClick={() => handleAnswerClick(answer)}>
          {answer.name.common}
        </Option>
      ))}
    </OptionsContainer>
  );
}

export default AnswerOptions;
