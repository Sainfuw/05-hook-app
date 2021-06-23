import React from "react";
import { useCounter } from "../../hooks/useCounter";
export const CounterWithCustomHook = () => {
  const { counter, decrement, increment, reset } = useCounter(0);

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary m-3" onClick={() => decrement()}>
        -1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary m-3" onClick={() => increment()}>
        +1
      </button>
    </>
  );
};
