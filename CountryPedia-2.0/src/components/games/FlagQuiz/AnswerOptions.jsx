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
  background-color: ${(props) =>
    props.isClicked ? (props.isCorrect ? "#64CE82" : "#FF475D") : "white"};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 0.5rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${(props) =>
      props.isClicked
        ? props.isCorrect
          ? "#64CE82"
          : "#FF475D"
        : props.isCorrect
        ? "#737dd6"
        : "#737dd6"};
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
        <Option
          key={index}
          onClick={() => handleAnswerClick(answer)}
          isClicked={answer.isClicked}
          isCorrect={answer.isCorrect}
        >
          {answer.name}
        </Option>
      ))}
    </OptionsContainer>
  );
}

export default AnswerOptions;
