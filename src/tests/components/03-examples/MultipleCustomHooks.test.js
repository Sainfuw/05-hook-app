import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-Examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en MultipleCustomHooks.test", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
      decrement: () => {},
    });
  });

  test("debe mostrarse correctamente", () => {
    useFetch.mockReturnValue({
      data: {},
      loading: true,
      error: "",
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar la informacion", () => {
    useFetch.mockReturnValue({
      data: {
        author: "Emilio",
        quote: "Hola Mundo",
      },
      loading: false,
      error: "",
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-2").text().trim()).toBe("Hola Mundo");
    expect(wrapper.find("footer").text().trim()).toBe("Emilio");
  });
});
