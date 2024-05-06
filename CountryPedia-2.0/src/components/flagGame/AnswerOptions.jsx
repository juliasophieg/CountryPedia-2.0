import React from "react";
import styled from "@emotion/styled";

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 1000px;
  @media (max-width: 1000px) {
    width: 700px;
  }
`;

const Option = styled.button`
  max-width: 400px;
  width: 100%;
  background-color: white;
  transition: all 0.3s;
  @media (max-width: 1000px) {
    width: 250px;
    transition: all 0.3s;
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
