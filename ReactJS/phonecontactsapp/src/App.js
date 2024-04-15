// App.js
import React from "react";
import "./App.css";
import Contacts from "./components/Contacts.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <header>
        <About />
      </header>

      <main>
        <Contacts />
      </main>

      <Footer />
    </div>
  );
}

export default App;
