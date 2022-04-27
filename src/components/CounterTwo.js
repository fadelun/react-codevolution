import React, { useEffect, useRef } from "react";
import useCounter from "../hooks/useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(20, 4);

  const refCount = useRef(0);

  useEffect(() => {
    refCount.current += 1;
  }, [count]);

  return (
    <div>
      <p>Count = {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <p>Banyak penambahan - {refCount.current}</p>
    </div>
  );
}

export default CounterOne;
