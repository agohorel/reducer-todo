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
    case "TOGGLE_COMPLETED":
      return state.map(todo => {
        if (todo.createdAt === payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return { ...todo };
        }
      });
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
