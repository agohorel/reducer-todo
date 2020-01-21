import React from "react";

import { Todo } from "./Todo";

export const Todos = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (
        <h2>{todo.task}</h2>
      ))}
    </>
  );
};
