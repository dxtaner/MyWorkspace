import React from "react";
import "./App.css";
import ParagraphGenerator from "./components/ParagraphGenerator.js";

function App() {
  return (
    <div className="App">
      <h1>Paragraf Oluşturucu</h1>
      <ParagraphGenerator />
      <footer className="footer">
        <p>
          Hakkında: Bu uygulama, kullanıcının belirli sayıda paragraf
          oluşturmasına olanak tanır.
        </p>
        <a
          href="https://github.com/dxtaner"
          target="_blank"
          rel="noopener noreferrer">
          My github
        </a>
      </footer>
    </div>
  );
}

export default App;
