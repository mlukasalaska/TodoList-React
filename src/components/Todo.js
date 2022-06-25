import React, { useState } from "react";

function Todo({ todo, toggleComplete, removeItem }) {
  const [extraText, setExtraText] = useState(false);

  function handleCheckClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeItem(todo.id);
  }

  function handleItemClick(e) {
    setExtraText(!extraText);
  }

  function handleCheckChange() {}
  return (
    <div className={`list-item ${todo.completed ? " completed" : ""}`}>
      <li className="task-name">
        <div
          className={`task-name-cont ${extraText ? "click-class" : ""}`}
          onClick={handleItemClick}
        >
          {todo.task}
        </div>
      </li>
      <button className="delete" onClick={handleRemoveClick}></button>
      <input
        className="checkbox"
        type="checkbox"
        checked={todo.completed}
        onClick={handleCheckClick}
        onChange={handleCheckChange}
      />
    </div>
  );
}

export default Todo;
