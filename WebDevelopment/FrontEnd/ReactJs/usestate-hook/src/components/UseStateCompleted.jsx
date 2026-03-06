import { useState } from "react";

function UseStateCompleted() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>useState Completed Example</h2>
      <h3>Count: {count}</h3>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default UseStateCompleted;
