import React from "react";

function Result({ correct, onNext }) {
  return (
    <div className="result">
      <p>{correct ? "Correct!" : "Incorrect!"}</p>
      <button onClick={onNext}>Next Question</button>
    </div>
  );
}

export default Result;
