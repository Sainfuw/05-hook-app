import React from "react";
import { Todo } from "../../types/appTypes";

interface Props {
  todo: Todo;
  index: number;
  handleDelete: (id: number) => void;
  toggleDone: (id: number) => void;
}

export const TodoListItem = ({
  todo,
  index,
  handleDelete,
  toggleDone,
}: Props) => {
  return (
    <li className="list-group-item">
      <p
        className={`${todo.done && " complete"}`}
        onClick={() => toggleDone(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        className="btn btn-outline-danger"
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
