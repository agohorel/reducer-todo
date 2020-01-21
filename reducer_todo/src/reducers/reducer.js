export const initialState = [
  {
    task: "create some initial state for my reducer",
    completed: false,
    createdAt: Date.now(),
    dueBy: Date.now(),
    tags: ["javascript", "state management"]
  }
];

export const todoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TODO":
      return [...state, payload];
    default:
      return state;
  }
};
