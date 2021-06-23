import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("Pruebas en useFetch.test", () => {
  test("debe retornar la informacion por defecto", () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );
    const { data, loading, error } = result.current;
    expect(data).toEqual({});
    expect(loading).toBe(true);
    expect(error).toBe("");
  });

  test("debe tener la informacion deseada, loading false, error: false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/api/users?page=2`)
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data).not.toEqual({});
    expect(loading).toBe(false);
    expect(error).toBe("");
  });

  test("debe manejar el error", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/apid/users?page=2`)
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data).toEqual({});
    expect(loading).toBe(false);
    expect(error).toBe("No se pudo cargar la info");
  });
});
