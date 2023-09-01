// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { WeatherProvider } from "./components/WeatherContext.js";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
