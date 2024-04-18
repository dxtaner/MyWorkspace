import React from "react";
import Question from "./components/Question";
import "./App.css";

export default function App() {
  const [start, setStart] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [answers, setAnswers] = React.useState([]);
  const [check, setCheck] = React.useState(false);
  const [correct, setCorrect] = React.useState(0);
  const [limit, setLimit] = React.useState(5); // Başlangıçta 5 olarak ayarlandı

  async function getQuestions() {
    const resource = await fetch(
      `https://the-trivia-api.com/api/questions?limit=${limit}&region=TR&difficulty=easy&type=multiple`
    );
    const data = await resource.json();
    const getQuestions = data.map((item) => ({
      q_id: item.id,
      q: item.question,
      q_answer: item.correctAnswer,
    }));
    const getAnswers = data.map(({ correctAnswer, incorrectAnswers }) => [
      { a: correctAnswer, isHeld: false, class: "" },
      ...incorrectAnswers.map((answer) => ({
        a: answer,
        isHeld: false,
        class: "",
      })),
    ]);
    const suffleAnswers = getAnswers.map((row) => {
      return row.map((item) => item).sort(() => Math.random() - 0.5);
    });
    setQuestions(getQuestions);
    setAnswers(suffleAnswers);
  }

  React.useEffect(() => {
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const compQuestions = questions.map((q, index) => {
    return (
      <Question
        key={q.q_id}
        q={q.q}
        a={JSON.stringify(answers[index])}
        handleAnswer={(e) => handleAnswer(e, index)}
      />
    );
  });

  function handleAnswer(e, qId) {
    const newAnswers = answers.map((answer, index) => {
      if (index === qId) {
        return answer.map((item) =>
          item.a === e.target.textContent
            ? { ...item, isHeld: !item.isHeld }
            : { ...item, isHeld: false }
        );
      }
      return answer;
    });
    setAnswers(newAnswers);
  }

  function checkAnswers() {
    const newAnswers = answers.map((row, index) => {
      return row.map((answer) => {
        if (answer.isHeld && answer.a === questions[index].q_answer) {
          setCorrect((prevState) => prevState + 1);
          return { ...answer, isHeld: false, class: "correct" };
        } else if (answer.isHeld && answer.a !== questions[index].q_answer) {
          return { ...answer, isHeld: false, class: "wrong" };
        } else {
          return { ...answer, class: "blank" };
        }
      });
    });

    setAnswers(newAnswers);
    if (check) {
      getQuestions();
      setCheck(false);
      setCorrect(0);
    } else {
      setCheck(true);
    }
  }

  return (
    <main>
      {start ? (
        <>
          {compQuestions}
          {check && (
            <p className="score">You scored {correct}/5 correct answers</p>
          )}
          <button className="check" onClick={checkAnswers}>
            {check ? "New questions" : "Check answers"}
          </button>
        </>
      ) : (
        <div className="welcome">
          <h1>quizTime</h1>
          <p>Run your brain with the random 5 questions!</p>
          <button onClick={() => setStart(true)}>Start quiz</button>
        </div>
      )}
    </main>
  );
}
