import React from "react";
import styled from "styled-components";

import { Todo } from "./Todo";

export const Todos = ({ reducer: { state, dispatch } }) => {
  return (
    <TodoContainer>
      {state.map(todo => (
        <Todo key={todo.createdAt} todo={todo} dispatch={dispatch}></Todo>
      ))}
    </TodoContainer>
  );
};

const TodoContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
`;
