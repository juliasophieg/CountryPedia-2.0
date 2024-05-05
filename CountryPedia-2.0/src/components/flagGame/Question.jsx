import React from "react";

function Question({ flag }) {
  return (
    <div className="question">
      <img src={flag} alt="Flag" className="flag-image" />
      <h2>Which country does this flag belong to?</h2>
    </div>
  );
}

export default Question;
