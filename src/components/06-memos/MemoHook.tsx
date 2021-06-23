import React, { useState, useMemo } from "react";
import "../05-useLayoutEffect/layout.css";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => {
    return procesoPesado(counter);
  }, [counter]);

  return (
    <>
      <h1>MemoHook</h1>
      <h4>Counter: {counter}</h4>
      <hr />
      <p>{memoProcesoPesado}</p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ms-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
