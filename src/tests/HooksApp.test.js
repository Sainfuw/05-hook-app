import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { HooksApp } from "../HooksApp";

describe("Pruebas en HooksApp.test", () => {
  test("comprobar que el componente se vea correctamente", () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
