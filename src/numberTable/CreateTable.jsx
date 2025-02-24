import React, { useState } from "react";
import "../styles.css";
import { toast } from "react-toastify";

export const CreateTable = () => {
  const [inputNumber, setInputNumber] = useState();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleOnClick = () => {
    for (let i = 0; i <= 10; i++) {
      const numbers = `${inputNumber * i}`;
      console.log(numbers);
    }
  };

  const handleReset = () => {
    setInputNumber("");
    setIsButtonClicked(false);
  };

  const showMathTable = () => {
    const tableRow = [];
    for (let i = 1; i <= 10; i++) {
      const numbers = `${inputNumber} * ${i}=${inputNumber * i}`;
      tableRow.push(<div>{numbers}</div>);
      console.log(numbers);
    }
    return tableRow;
  };

  const validateInput = (e) => {
    if (e.target.value < 0) {
      toast("Enter number greater than zero only");
    }
  };

  return (
    <>
      <div className="box">
        <label>
          Enter your Number:
          <input
            type="number"
            value={inputNumber}
            onChange={(e) => {
              validateInput(e);
              setInputNumber(e.target.value);
              setIsButtonClicked(false);
            }}
          />
        </label>
      </div>
      {"    "}
      <div>
        <button
          onClick={() => {
            setIsButtonClicked(true);
            handleOnClick();
          }}
          disabled={inputNumber > 0 ? false : true}
        >
          Show Table
        </button>{" "}
        <button onClick={handleReset} disabled={inputNumber > 0 ? false : true}>
          Reset
        </button>
        <p>
          {isButtonClicked ? (
            <div>
              Showing table of {inputNumber}
              {showMathTable()}
            </div>
          ) : (
            <p>Please enter a number!</p>
          )}
        </p>
      </div>
    </>
  );
};
