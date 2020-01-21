import React, { useReducer } from "react";

import { todoReducer, initialState } from "./reducers/reducer";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { FilterTodos } from "./components/FilterTodos";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <AddTodo reducer={{ state, dispatch }}></AddTodo>
      <FilterTodos></FilterTodos>
      <Todos todos={state}></Todos>
    </>
  );
}

export default App;
