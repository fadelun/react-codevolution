import React, { useState } from "react";

function HooksState() {
  const initial = 0;
  const [count, setCount] = useState(initial);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
      //   setCount(count + 1);
    }
  };

  return (
    <div className="hook" style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(initial)}>reset</button>
      <button onClick={() => incrementFive()}>increment five</button>
    </div>
  );
}

export default HooksState;
