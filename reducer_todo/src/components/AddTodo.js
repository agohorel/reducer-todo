import React, { useState } from "react";
// import { useLocalStorage } from "../hooks/useLocalStorage";
import { Form } from "../styles/form";

export const AddTodo = ({ reducer: { state, dispatch } }) => {
  const [formData, setFormData] = useState({});
//   const [localStorage, setLocalStorage] = useLocalStorage("saved_todos", []);

  const handleInput = e => {
    switch (e.target.id) {
      case "tags":
        return setFormData({
          ...formData,
          [e.target.id]: e.target.value.split(",")
        });

      case "dueBy":
        return setFormData({
          ...formData,
          [e.target.id]: new Date(e.target.value)
        });

      default:
        return setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const addTodo = e => {
    e.preventDefault();
    const payload = { ...formData, createdAt: Date.now(), completed: false };
    dispatch({
      type: "ADD_TODO",
      payload
    });
    // setLocalStorage([...state, payload]);
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });

    // setLocalStorage(state.filter(todo => !todo.completed));
  };

  return (
    <Form>
      <label htmlFor="task">task:</label>
      <input type="text" id="task" onChange={handleInput} />
      <label htmlFor="dueBy">due by:</label>
      <input type="date" id="dueBy" onChange={handleInput} />
      <label htmlFor="tags">tags:</label>
      <input type="text" id="tags" onChange={handleInput} />
      <button onClick={addTodo}>add todo</button>
      <button onClick={clearCompleted}>clear completed</button>
    </Form>
  );
};
