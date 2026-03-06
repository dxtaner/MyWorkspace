import { useState } from "react";

function UseStatePractice() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = () => {
    setSubmittedName(name);
  };

  return (
    <div>
      <h2>useState Practice Example</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
        Submit
      </button>

      <h3>Hello, {submittedName}</h3>
    </div>
  );
}

export default UseStatePractice;
