import React from "react";

function AnswerOption({ option, selected, correct, onSelect, disabled }) {
  return (
    <button
      className={`answer-option ${selected ? "selected" : ""} ${
        correct ? "correct" : ""
      }`}
      onClick={() => onSelect(option)}
      disabled={disabled}
    >
      {option}
    </button>
  );
}

export default AnswerOption;
