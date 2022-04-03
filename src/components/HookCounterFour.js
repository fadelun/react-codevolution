import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItems] = useState([]);

  const myItems = ["apel", "pepaya", "jeruk"];

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={() => addItem()}>add Number</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}> {item.value % 2 == 0 ? item.value : "ganjil"} </li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;
