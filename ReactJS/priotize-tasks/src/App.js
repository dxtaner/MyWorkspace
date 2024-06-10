import React from "react";
import "./App.css";
import "h8k-components";
import Tasks from "./components/Tasks";

const title = "Prioritize Tasks";

const App = () => {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <Tasks />
    </div>
  );
};

export default App;
