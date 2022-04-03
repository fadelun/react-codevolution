// import HooksState from "./components/HooksState";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterFour from "./components/HookCounterFour";
// import HookEffect from "./components/HookEffect";
// import HookMouse from "./components/HookMouse";
// import HookContainer from "./components/HookContainer";
// import DataFetching from "./components/DataFetching";
import React from "react";
import ComponentC from "./components/ComponentC";

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"fadel"}>
        <ComponentC />
      </UserContext.Provider>
    </div>
  );
}

export default App;
