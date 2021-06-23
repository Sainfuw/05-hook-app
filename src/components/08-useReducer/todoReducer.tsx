import { Todo } from "../../types/appTypes";

export type TodoAction =
  | { type: "add"; payload: Todo }
  | { type: "toggleDone"; payload: number }
  | { type: "remove"; payload: number };

export const todoReducer = (state: Todo[], action: TodoAction) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "remove":
      return state.filter((todo) => todo.id !== action.payload);

    case "toggleDone":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
};
