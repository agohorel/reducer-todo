import React from "react";
import styled from "styled-components";

export const Todo = ({ todo, dispatch }) => {
  const toggleCompleted = e => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo.createdAt
    });
  };

  return (
    <TodoItem onClick={toggleCompleted} completed={todo.completed}>
      {todo.task}
    </TodoItem>
  );
};

const TodoItem = styled.div`
  text-decoration: ${props => (props.completed ? "line-through" : "null")};
`;
