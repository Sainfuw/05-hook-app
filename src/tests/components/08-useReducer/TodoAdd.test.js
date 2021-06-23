import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas en TodoAdd.test", () => {
  const handleAddTodo = jest.fn();
  const handleInputChange = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("no debe llamar al handleAddTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("debe llamar a la funcion handleAddTodo", () => {
    wrapper.find("input").simulate("change", {
      target: {
        value: "Aprender Ingles",
        name: "description",
      },
    });
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: "Aprender Ingles",
      done: false,
    });
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
