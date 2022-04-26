// this example by w3schools
///////////////////////////////////////
import { useState, useEffect, useRef } from "react";

function NotCauseRenders() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default NotCauseRenders;
