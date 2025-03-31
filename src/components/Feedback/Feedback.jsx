import React from "react";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className="list">
      <li className="listItem">Good: {good}</li>
      <li className="listItem">Neutral: {neutral}</li>
      <li className="listItem">Bad: {bad}</li>
      <li className="listItem">Total: {total}</li>
      <li className="listItem">Positive feedback: {positive}</li>
    </ul>
  );
};
export default Feedback;
