import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function DocTitleTwo() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count = {count}</button>
    </>
  );
}

export default DocTitleTwo;
