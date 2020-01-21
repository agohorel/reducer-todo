import React from "react";

import { Todo } from "./Todo";

export const Todos = ({ reducer: { state, dispatch } }) => {
  return (
    <>
      {state.map(todo => (
        <Todo key={todo.createdAt} todo={todo} dispatch={dispatch}></Todo>
      ))}
    </>
  );
};
