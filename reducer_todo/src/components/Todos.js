import React from "react";
import styled from "styled-components";

import { Todo } from "./Todo";

export const Todos = ({ reducer }) => {
  return (
    <TodoContainer>
      {reducer.state.map(todo => (
        <Todo key={todo.createdAt} todo={todo} reducer={reducer}></Todo>
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
