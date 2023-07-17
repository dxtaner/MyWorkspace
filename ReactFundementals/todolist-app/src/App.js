import React, { useState } from "react";
import Todo from "./components/Todo.js";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        title: inputValue,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setInputValue("");
      showMessage("Todo başarıyla eklendi...");
    } else {
      showMessage("Lütfen bir todo girin!");
    }
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    showMessage("Todo başarıyla silindi....");
  };

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => {
      setMessage("");
    }, 1750);
  };

  return (
    <div className="app">
      <h1>Todo Listesi</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Yeni todo ekle"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Ekle</button>
      </div>
      {message && <div className="message">{message}</div>}
      <div className="todos">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
