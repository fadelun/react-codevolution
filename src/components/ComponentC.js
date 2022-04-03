import React, { useState } from "react";
import ComponentE from "./ComponentE";

export const UserContext = React.createContext();

function ComponentC() {
  const [userData] = useState({
    name: "fadll",
    age: 14,
  });

  return (
    <div>
      <UserContext.Provider value={userData}>
        <ComponentE />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentC;
