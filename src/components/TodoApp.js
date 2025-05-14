import React, { useState } from 'react';

function TodoApp() {

  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };
  const handleAddTask = () => {
    const trimmedTask = task.trim();
    if (trimmedTask === "") {
      alert("Please enter a valid task.");
      return;
    }
    setTodoList([...todoList, trimmedTask]);

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
