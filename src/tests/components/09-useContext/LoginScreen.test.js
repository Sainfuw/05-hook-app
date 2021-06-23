import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/UserContext";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";

describe("Pruebas en LoginScreen.test", () => {
  const user = {
    id: 12345,
    name: "Emilio Navarro",
    email: "sainfuw@aol.com",
  };
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <LoginScreen />
    </UserContext.Provider>
  );

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe ejecutar el setUser con el argumento esperado", () => {
    wrapper.find("button").simulate("click");
    expect(setUser).toHaveBeenCalledWith(user);
  });
});
