import React, { useState, useCallback } from "react";
import "../05-useLayoutEffect/layout.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <>
      <h4>CallbackHook: {counter}</h4>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
