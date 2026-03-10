function InlineStyling() {
  const headingStyle = {
    color: "blue",
    fontSize: "30px",
  };

  return (
    <div>
      <h2 style={headingStyle}>Inline Styling Example</h2>

      <p style={{ color: "gray" }}>This text uses inline style</p>
    </div>
  );
}

export default InlineStyling;
