import React, { useReducer, useEffect } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import { Todo } from "../../types/appTypes";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const init = () => {
  const storedTodos = localStorage.getItem("todos");
  return typeof storedTodos === "string" ? JSON.parse(storedTodos) : [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleAddTodo = (newTodo: Todo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleDelete = (id: number) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  const toggleDone = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: id,
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h4 id="TodoAppTitle">TodoApp ({todos.length})</h4>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            toggleDone={toggleDone}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};
