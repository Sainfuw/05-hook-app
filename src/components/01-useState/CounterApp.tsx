import React, { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  });

  return (
    <>
      <h1>Counter {JSON.stringify(counter, null, 3)}</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...counter,
            counter1: counter.counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
