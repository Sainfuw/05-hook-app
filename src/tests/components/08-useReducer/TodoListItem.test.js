import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en TodoListItem.test", () => {
  const handleDelete = jest.fn();
  const toggleDone = jest.fn();
  let wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      toggleDone={toggleDone}
    />
  );
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <TodoListItem
        todo={demoTodos[0]}
        index={0}
        handleDelete={handleDelete}
        toggleDone={toggleDone}
      />
    );
  });

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe llamar la funcion handleDelete", () => {
    // toHaveBeenCalledWith
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("debe llamar la funcion handleToggle", () => {
    // toHaveBeenCalledWith
    wrapper.find("p").simulate("click");
    expect(toggleDone).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("debe mostrar el texto correctamente", () => {
    // contenido del parrafo
    expect(wrapper.find("p").text().trim()).toBe("1. Aprender React");
  });

  test("debe tener la clase complete si el todo.done esta en true", () => {
    const wrapper = shallow(
      <TodoListItem
        todo={{ ...demoTodos[0], done: true }}
        index={0}
        handleDelete={handleDelete}
        toggleDone={toggleDone}
      />
    );

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
