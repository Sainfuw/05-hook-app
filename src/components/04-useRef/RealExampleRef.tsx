import React, { useState } from "react";
import "../02-useEffect/effects.css";
import { MultipleCustomHooks } from "../03-Examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h4>RealExampleRef</h4>
      <hr />

      {show && <MultipleCustomHooks />}

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide
      </button>
    </>
  );
};
