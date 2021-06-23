import "@testing-library/jest-dom";
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer.test", () => {
  test("debe retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test("debe agregar un todo", () => {
    const newTodo = {
      id: 3,
      desc: "Aprender MERN",
      done: true,
    };

    const state = todoReducer(demoTodos, {
      type: "add",
      payload: newTodo,
    });

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("debe remover un todo", () => {
    const state = todoReducer(demoTodos, {
      type: "remove",
      payload: 2,
    });

    expect(state.length).toBe(1);
    expect(state).toEqual(demoTodos.filter((todo) => todo.id !== 2));
  });

  test("debe cambiar el estado de un todo", () => {
    const state = todoReducer(demoTodos, {
      type: "toggleDone",
      payload: 1,
    });

    expect(state[0].done).toBe(true);
  });
});
