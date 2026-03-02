import Header from "./components/Header";
import square, { pi, doublePi, triplePi } from "./math";
import { getCurrentYear } from "./utils.js";

function App() {
  const name = "Taner";
  const luckyNumber = 7;

  return (
    <div>
      <Header />

      <h2>JSX Examples</h2>

      <p>Hello {name}</p>
      <p>Your lucky number is {luckyNumber}</p>
      <p>Current Year: {getCurrentYear()}</p>

      <hr />

      <h2>Math Module Practice</h2>
      <ul>
        <li>PI: {pi}</li>
        <li>Double PI: {doublePi()}</li>
        <li>Triple PI: {triplePi()}</li>
        <li>Square 5: {square(5)}</li>
      </ul>
    </div>
  );
}

export default App;
