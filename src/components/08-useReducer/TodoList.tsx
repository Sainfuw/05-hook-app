import React from "react";
import { Todo } from "../../types/appTypes";
import { TodoListItem } from "./TodoListItem";

interface Props {
  todos: Todo[];
  handleDelete: (id: number) => void;
  toggleDone: (id: number) => void;
}

export const TodoList = ({ todos, handleDelete, toggleDone }: Props) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={index}
          handleDelete={handleDelete}
          toggleDone={toggleDone}
        />
      ))}
    </ul>
  );
};
