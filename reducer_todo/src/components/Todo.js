import React from "react";

export const Todo = ({ todo, dispatch }) => {
  const toggleCompleted = e => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo.createdAt
    });
  };

  return <h2 onClick={toggleCompleted}>{todo.task}</h2>;
};
