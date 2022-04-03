import React, { useState, useEffect } from "react";

function HookEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("updating document title");
    document.title = `you have ${count} times`;
  }, [name]);

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => setCount(count + 1)}>you have {count} times</button>
    </div>
  );
}

export default HookEffect;
