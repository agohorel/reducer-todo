import React, { useReducer } from "react";

import { todoReducer, initialState } from "./reducers/reducer";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { FilterTodos } from "./components/FilterTodos";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);
  return (
    <>
      <AddTodo reducer={{ state, dispatch }}></AddTodo>
      <FilterTodos></FilterTodos>
      <Todos reducer={{ state, dispatch }}></Todos>
    </>
  );
}

export default App;
