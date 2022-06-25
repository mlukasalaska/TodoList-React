import React, { memo } from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete, removeItem }) {
  return (
    <ul id="list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeItem={removeItem}
        />
      ))}
    </ul>
  );
}

export default memo(TodoList);
