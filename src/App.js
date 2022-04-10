import React from "react";
import "./App.css";
import DataFetching from "./components/DataFetching";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

function App() {
  return (
    <div className="App">
      <DataFetching count={initialState} />
    </div>
  );
}

export default App;
