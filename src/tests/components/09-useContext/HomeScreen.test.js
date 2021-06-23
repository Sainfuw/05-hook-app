import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en HomeScreen.test", () => {
  const user = {
    name: "Emilio",
    email: "sainfuw@aol.com",
  };

  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  );

  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
