import { useEffect, useState } from "react";

function Timer() {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (isActive) {
      const timeHandler = setInterval(() => setTimer((prev) => prev + 1), 1000);
      return () => {
        clearInterval(timeHandler);
      };
    }else{
        setTimer(0); // not goood practice, use toggle Handler
    }
  }, [isActive]);

  return (
    <>
      <p>{timer}</p>
      <button onClick={() => setIsActive((prev) => !prev)}>
        {isActive ? "Stop Timer" : "start Timer"}
      </button>
    </>
  );
}

export default Timer;
