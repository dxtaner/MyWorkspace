import { useState } from "react";

function EventHandling() {
  const [message, setMessage] = useState("Button'a basılmadı");

  const handleClick = () => {
    setMessage("Button'a basıldı ✅");
  };

  const handleMouseOver = () => {
    setMessage("Mouse üzerine geldi 🖱️");
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h3>Event Handling in React</h3>

      <button onClick={handleClick}>Click Me</button>

      <div
        onMouseOver={handleMouseOver}
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#eee",
          display: "inline-block",
        }}
      >
        Mouse Over Area
      </div>

      <p>{message}</p>
    </div>
  );
}

export default EventHandling;
