import React, { useState } from "react";

export const AddTodo = ({ reducer: { state, dispatch } }) => {
  const [formData, setFormData] = useState({});

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
    dispatch({
      type: "ADD_TODO",
      payload: { ...formData, createdAt: Date.now(), completed: false }
    });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <form>
      <label htmlFor="task">task:</label>
      <input type="text" id="task" onChange={handleInput} />
      <label htmlFor="dueBy">due by:</label>
      <input type="date" id="dueBy" onChange={handleInput} />
      <label htmlFor="tags">tags:</label>
      <input type="text" id="tags" onChange={handleInput} />
      <button onClick={addTodo}>add todo</button>
      <button onClick={clearCompleted}>clear completed</button>
    </form>
  );
};
