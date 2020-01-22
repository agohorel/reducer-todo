import React, { useReducer } from "react";

import { todoReducer, initialState } from "./reducers/reducer";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { FilterTodos } from "./components/FilterTodos";
import GlobalStyle from "./styles/global";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <AddTodo reducer={{ state, dispatch }}></AddTodo>
      <FilterTodos></FilterTodos>
      <Todos reducer={{ state, dispatch }}></Todos>
    </>
  );
}

export default App;
