import React, { useEffect, useState, useRef } from "react";

function TimerHook() {
  const [timer, setTimer] = useState(0);

  const refInterval = useRef(0);

  console.log(refInterval);

  useEffect(() => {
    refInterval.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(refInterval.current);
    };
  }, []);

  return (
    <div>
      <p>Timer - {timer}</p>
      <button onClick={() => clearInterval(refInterval.current)}>Stop !</button>
    </div>
  );
}

export default TimerHook;
