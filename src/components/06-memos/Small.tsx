import React, { memo } from "react";

export const Small = memo(({ value }: any) => {
  console.log("Me volvi a llamar :(");

  return (
    <>
      <small>{value}</small>
    </>
  );
});
