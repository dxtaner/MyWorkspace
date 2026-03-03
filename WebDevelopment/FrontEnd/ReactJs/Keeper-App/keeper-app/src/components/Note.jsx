function Note() {
  return (
    <div style={noteStyle}>
      <h2>React</h2>
      <p>Learn React step by step</p>
    </div>
  );
}

const noteStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "7px",
  boxShadow: "0 2px 5px #ccc",
  padding: "10px",
  margin: "16px",
  width: "250px",
};

export default Note;
