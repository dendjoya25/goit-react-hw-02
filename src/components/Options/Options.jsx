import React from "react";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")} className="btn">
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} className="btn">
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className="btn">
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className="resetBtn">
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
