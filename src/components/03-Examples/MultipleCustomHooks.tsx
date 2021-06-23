import React from "react";
import "../02-useEffect/effects.css";
import { useFetch, QuoteInterface } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const api: QuoteInterface = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { data, loading } = api;

  return (
    <>
      <h4>BreakingBad Quotes</h4>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-2">{data!.quote}</p>
          <footer className="blockquote-footer">{data!.author}</footer>
        </blockquote>
      )}
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
