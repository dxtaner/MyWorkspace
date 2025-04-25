import React from "react";
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import "./App.css"; // Import your CSS file

import MultiplyCounter from "./components/MultiplyCounter.js"; // Add the new component
import ResetCounter from "./components/ResetCounter.js"; // Add the new component

function App() {
  return (
    <div className="container">
      {" "}
      {/* Apply styles to a container */}
      <h1>Counter App</h1>
      <Counter />
      <IncreaseCounter />
      <DecreaseCounter />
      <IncreaseByTwoCounter />
      <MultiplyCounter />
      <ResetCounter />
    </div>
  );
}

export default App;
