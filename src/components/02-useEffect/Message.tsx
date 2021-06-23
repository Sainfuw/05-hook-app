import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e: any) => {
      setCoords({ x: e.x, y: e.y });
    };

    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <>
      <h4>Eres genial!</h4>
      <p>
        x: {coords.x}, y: {coords.y}
      </p>
    </>
  );
};
