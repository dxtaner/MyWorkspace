// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Editor from "./components/Editor.js";
import Previewer from "./components/Previewer.js";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Editor className="Editor" />
        <Previewer className="Previewer" />
      </div>
    </Provider>
  );
}

export default App;
