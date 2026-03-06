import UseStateCompleted from "./components/UseStateCompleted";
import UseStatePractice from "./components/UseStatePractice";
import ES6Destructuring from "./components/ES6Destructuring";
import EventHandling from "./components/EventHandling";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Vite Examples</h1>

      <UseStateCompleted />
      <UseStatePractice />
      <ES6Destructuring />
      <EventHandling />
    </div>
  );
}

export default App;
