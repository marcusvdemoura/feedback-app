import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  // fixes the average to only one decimal ( 8.5 instead of 8.5555 for example ), but if it's an integer ( 9.0 for example ) it 'll remove the 0
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>Average rating: {average > 0 ? average : "0"}</h4>
    </div>
  );
};

export default FeedbackStats;
