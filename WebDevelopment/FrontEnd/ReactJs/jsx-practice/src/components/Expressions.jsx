function Expressions() {
  const name = "Taner";
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h2>JavaScript Expressions in JSX</h2>

      <p>Hello {name}</p>

      <p>Current Year: {currentYear}</p>

      <p>Random Number: {Math.floor(Math.random() * 10)}</p>
    </div>
  );
}

export default Expressions;
