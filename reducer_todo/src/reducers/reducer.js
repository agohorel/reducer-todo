export const initialState = [
  {
    task: "create some initial state for my reducer",
    completed: false,
    createdAt: new Date(),
    dueBy: new Date("01/23/2020"),
    tags: ["javascript", "state management"]
  },
  {
    task: "implement some basic CRUD features",
    completed: false,
    createdAt: new Date(),
    dueBy: new Date("01/24/2020"),
    tags: ["javascript", "CRUD"]
  },
  {
    task: "add persistance with localStorage",
    completed: false,
    createdAt: new Date(),
    dueBy: new Date("01/25/2020"),
    tags: ["javascript", "localStorage"]
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
