/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";

const CHOICES = ["Taş", "Kağıt", "Makas"];

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const playGame = (choice) => {
    if (countdown > 0) return;

    const randomIndex = Math.floor(Math.random() * 3);
    const compChoice = CHOICES[randomIndex];
    setUserChoice(choice);
    setComputerChoice(compChoice);

    let result = 0;

    if (choice !== compChoice) {
      if (
        (choice === "Taş" && compChoice === "Makas") ||
        (choice === "Kağıt" && compChoice === "Taş") ||
        (choice === "Makas" && compChoice === "Kağıt")
      ) {
        result = 1;
      } else {
        result = -1;
      }
    }

    if (result === 1) {
      setScore(score + 1);
    } else if (result === -1) {
      setScore(score - 1);
    }

    setHistory([...history, { user: choice, computer: compChoice, result }]);
    setCountdown(3);
  };

  return (
    <div className="App">
      <h1>Taş Kağıt Makas Oyunu</h1>
      {countdown > 0 ? (
        <h2>Geri sayım: {countdown}</h2>
      ) : (
        <>
          <div className="choices">
            {CHOICES.map((choice, index) => (
              <button key={index} onClick={() => playGame(choice)}>
                {choice}
              </button>
            ))}
          </div>
          <h2>Skor: {score}</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                {item.user} vs {item.computer} -{" "}
                {item.result === 1
                  ? "Kullanıcı Kazandı"
                  : item.result === -1
                  ? "Bilgisayar Kazandı"
                  : "Beraberlik"}
              </li>
            ))}
          </ul>
          {score === 3 && <p>Sen kazandın!</p>}
          {score === -3 && <p>Bilgisayar kazandı!</p>}
        </>
      )}
    </div>
  );
}

export default App;
