import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
function App() {
  const [userFeedback, setUserFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(userFeedback));
  }, [userFeedback]);

  const updateFeedback = (feedbackType) => {
    setUserFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setUserFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.removeItem("feedback");
  };
  const totalFeedback =
    userFeedback.good + userFeedback.neutral + userFeedback.bad;

  const positiveFeedback =
    totalFeedback > 0
      ? Math.round((userFeedback.good / totalFeedback) * 100)
      : 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={userFeedback.good}
          neutral={userFeedback.neutral}
          bad={userFeedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet!" />
      )}
    </>
  );
}

export default App;
