import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en useForm.text", () => {
  const initialForm = {
    name: "Emilio",
    email: "sainfuw@aol.com",
  };

  test("debe regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current.form).toBe(initialForm);
    expect(typeof result.current.handleInputChange).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("debe cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    act(() => {
      result.current.handleInputChange({
        target: {
          name: "name",
          value: "Pepito",
        },
      });
    });
    expect(result.current.form).toEqual({
      ...initialForm,
      name: "Pepito",
    });
  });

  test("debe reestablecer el formulario con el reset", () => {
    const { result } = renderHook(() => useForm(initialForm));
    act(() => {
      result.current.handleInputChange({
        target: {
          name: "name",
          value: "Pepito",
        },
      });
      result.current.reset();
    });
    expect(result.current.form).toEqual(initialForm);
  });
});
