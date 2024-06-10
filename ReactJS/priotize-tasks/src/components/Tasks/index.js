import React, { useState } from "react";
import "./index.css";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("");

  const handleAddTask = () => {
    if (!taskName || !taskPriority) {
      alert("Please enter both title and task priority");
      return;
    }

    const priorityValue = parseInt(taskPriority);
    if (priorityValue <= 0) {
      alert("Task priority must be a number greater than 0");
      return;
    }

    const newTask = {
      name: taskName,
      priority: priorityValue,
    };

    const updatedTasks = [...tasks, newTask].sort(
      (a, b) => a.priority - b.priority
    );
    setTasks(updatedTasks);
    setTaskName("");
    setTaskPriority("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input
          data-testid="input-task-name"
          className="large mx-8"
          type="text"
          placeholder="Task Title"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          data-testid="input-task-priority"
          className="large mx-8"
          type="number"
          placeholder="Task Priority"
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
          min="1"
        />
        <button
          data-testid="submit-button"
          className="add-button"
          onClick={handleAddTask}>
          Add Task
        </button>
      </section>

      <div className="card w-40 pt-30 pb-8 mt-20">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody data-testid="tasksList">
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.name}</td>
                <td>{task.priority}</td>
                <td>
                  <button
                    className="danger"
                    onClick={() => handleDeleteTask(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks;
