import React, { useLayoutEffect, useRef, useState } from "react";
import "./layout.css";
import { useFetch, QuoteInterface } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const api: QuoteInterface = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!api && api.data;
  const [boxSize, setBoxSize] = useState();
  const pTag = useRef<any>();

  useLayoutEffect(() => {
    quote && setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h4>useLayoutEffect</h4>
      <hr />

      {quote && (
        <blockquote className="blockquote text-end">
          <p className="mb-2" ref={pTag}>
            {quote}
          </p>
        </blockquote>
      )}
      <pre>{JSON.stringify(boxSize, null, 5)}</pre>
      <div className="text-center">
        <button onClick={decrement} className="btn btn-primary mx-2">
          Prev Quote
        </button>
        <button onClick={increment} className="btn btn-primary mx-2">
          Next Quote
        </button>
      </div>
    </>
  );
};
