import "@testing-library/jest-dom";
import { useCounter } from "../../hooks/useCounter";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Pruebas en useCounter.test", () => {
  test("debe retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("debe tener el counter en 100", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test("debe incrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => {
      result.current.increment();
    });
    expect(result.current.counter).toBe(11);
  });

  test("debe decrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.counter).toBe(9);
  });

  test("debe resetear el counter", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.counter).toBe(10);
  });
});
