import { useState } from "react";

function StudentScoreCard({ name, initialScore = 0 }) {
  const [score, setScore] = useState(initialScore);
  const addScore = () => {
    setScore((prev) => prev + 10);
  };
  const reduceScore = () => {
    setScore((prev) => prev - 10);
  };
  const reset = () => {
    setScore(0);
  };
  return (
    <>
      <p>Name: {name}</p>
      <p>Score: {score}</p>
      <button onClick={addScore}>Add Score</button>
      <button onClick={reduceScore}>Reduce Score</button>
      <button onClick={reset}>Reset Score</button>
    </>
  );
}

export default StudentScoreCard;
