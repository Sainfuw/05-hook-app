import React from "react";
import { useForm } from "../../hooks/useForm";
import { Todo } from "../../types/appTypes";

interface Props {
  handleAddTodo: (newTodo: Todo) => void;
}

export const TodoAdd = ({ handleAddTodo }: Props) => {
  const { form, handleInputChange, reset } = useForm({ description: "" });
  const { description } = form;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (description.trim().length < 2) return;
    const newTodo: Todo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar Todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Aprender ..."
          autoComplete="off"
          className="form-control"
          value={description}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-2 w-100">
          Agregar
        </button>
      </form>
    </>
  );
};
