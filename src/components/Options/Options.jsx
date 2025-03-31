import React from "react";
import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={s.btnsContainer}>
      <div className={s.chooseBtns}>
        <button onClick={() => updateFeedback("good")} className={s.btn}>
          Good
        </button>
        <button onClick={() => updateFeedback("neutral")} className={s.btn}>
          Neutral
        </button>
        <button onClick={() => updateFeedback("bad")} className={s.btn}>
          Bad
        </button>
      </div>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={s.resetBtn}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
