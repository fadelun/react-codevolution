import React from "react";
import "./App.css";
import FocusInput from "./components/FocusInput";
import NotCauseRenders from "./components/NotCauseRenders";
import TimerHook from "./components/TimerHook";

function App() {
  return (
    <div className="App">
      <TimerHook />
    </div>
  );
}

export default App;
