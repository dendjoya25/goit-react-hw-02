import React from "react";
import s from "./Description.module.css";

const Description = () => {
  return (
    <div>
      <h1 className={s.title}>Sip Happens Café</h1>
      <p className={s.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
export default Description;
