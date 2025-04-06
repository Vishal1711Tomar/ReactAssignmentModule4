import React, { useState } from 'react';

function TodoApp() {
  // State to store input value
  const [task, setTask] = useState("");

  // State to store list of tasks
  const [todoList, setTodoList] = useState([]);

  // Handle input change
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  // Handle adding task to the list
  const handleAddTask = () => {
    // Trim to avoid empty or space-only tasks
    const trimmedTask = task.trim();

    if (trimmedTask === "") {
      alert("Please enter a valid task.");
      return;
    }

    // Add to the list
    setTodoList([...todoList, trimmedTask]);

    // Clear input
    setTask("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>To-Do App</h2>

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={handleInputChange}
      />

      <button onClick={handleAddTask}>Add</button>

      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>  
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
