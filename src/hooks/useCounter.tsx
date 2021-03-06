import { useState } from "react";

export const useCounter = (initialState: number = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };

  const decrement = () => {
    counter > 1 && setCounter((counter) => counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
