import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DecrementCount = ({ count, setCount }) => {
  useEffect(() => {
    console.log("Clicked on Decrement button");
  }, [count]);

  const validateCount = (count) => {
    if (count <= 0) {
      toast("Count should not having negative value");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          validateCount(count);
        }}
      >
        Decrement Count
      </button>
    </div>
  );
};
