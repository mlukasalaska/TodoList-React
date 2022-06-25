import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: 0,
    task: "",
    completed: false,
  });

  const handleInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        id="textbox"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleInputChange}
      />
      <button id="add-btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
