import React from "react";
import s from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className={s.list}>
      <li className={s.listItem}>Good: {good}</li>
      <li className={s.listItem}>Neutral: {neutral}</li>
      <li className={s.listItem}>Bad: {bad}</li>
      <li className={s.listItem}>Total: {total}</li>
      <li className={s.listItem}>Positive feedback: {positive}%</li>
    </ul>
  );
};
export default Feedback;
