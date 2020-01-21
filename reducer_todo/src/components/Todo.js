import React from "react";
import styled from "styled-components";

export const Todo = ({ todo, dispatch }) => {
  const toggleCompleted = e => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo.createdAt
    });
  };

  const now = new Date();

  return (
    <TodoItem onClick={toggleCompleted}>
      <Task completed={todo.completed}>{todo.task}</Task>
      <DueDate now={now} due={todo.dueBy}>
        {todo.dueBy.toLocaleDateString()}
      </DueDate>
      <h4>tags:</h4>
      <Tags>
        {todo.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </TodoItem>
  );
};

const TodoItem = styled.div`
  background-color: #3c3c3c;
  padding: 1rem;
  transition: 0.2s ease-out all;
`;

const Task = styled.h3`
  text-decoration: ${props => (props.completed ? "line-through" : "null")};

  :hover {
    cursor: pointer;
    background-color: #4c4c4c;
    color: #eee;
  }
`;

const DueDate = styled.h4`
  background-color: ${props => (props.now > props.due ? "red" : "green")};
`;

const Tags = styled.div`
  display: flex;
`;

const Tag = styled.p`
  background-color: #1c1c1c;
  color: white;
  padding: 0.25rem 0.5rem;

  :not(:last-child) {
    margin-right: 1rem;
  }
`;
