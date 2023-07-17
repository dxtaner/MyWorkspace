import React from "react";
import "./Todo.css";

const Todo = ({ todo, toggleTodo, deleteTodo, selectedTodoId }) => {
  const { id, title, completed } = todo;

  return (
    <div
      className={`todo ${completed ? "completed" : ""} ${
        id === selectedTodoId ? "selected" : ""
      }`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <button onClick={() => deleteTodo(id)}>Sil</button>
    </div>
  );
};

export default Todo;
