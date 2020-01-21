import React, { useState } from "react";

export const AddTodo = ({ reducer: { state, dispatch } }) => {
  const [formData, setFormData] = useState({});

  const handleInput = e => {
    if (e.target.id === "tags") {
      setFormData({ ...formData, [e.target.id]: e.target.value.split(",") });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const addTodo = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: { ...formData, createdAt: Date.now(), completed: false }
    });
  };

  return (
    <form>
      <label htmlFor="task">task:</label>
      <input type="text" id="task" onChange={handleInput} />
      <label htmlFor="due">due by:</label>
      <input type="date" id="due" onChange={handleInput} />
      <label htmlFor="tags">tags:</label>
      <input type="text" id="tags" onChange={handleInput} />
      <button onClick={addTodo}>add todo</button>
    </form>
  );
};
