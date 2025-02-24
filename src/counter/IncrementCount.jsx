import React, { useState, useEffect } from "react";

export const IncrementCount = ({ count, setCount }) => {
  useEffect(() => {
    console.log("Clicked on Increment button");
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count
      </button>
    </div>
  );
};
