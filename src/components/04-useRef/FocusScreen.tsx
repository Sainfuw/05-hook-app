import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef<any>();
  // console.log(ref);

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h4>FocusScreen</h4>
      <hr />

      <input
        type="text"
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre"
      />
      <button className="btn btn-outline-primary mt-3" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};
