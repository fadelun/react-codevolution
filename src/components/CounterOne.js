import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(8, 2);

  return (
    <div>
      <p>Count = {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterOne;
