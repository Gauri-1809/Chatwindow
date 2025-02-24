import React, { useState } from "react";

export const DisplayListOP = () => {
  const [inputVal, setInputVal] = useState([]);
  const [isIpValuesSubmitted, setIsIpValuesSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const targetVal = e.target.value;
    const arraedVal = targetVal.split(",");
    setInputVal(arraedVal);
    console.log(arraedVal);
  };

  const handleOnClick = () => {
    setIsIpValuesSubmitted(true);
  };

  const showInputValues = () => {
    const arrayOfVal = [];
    inputVal?.forEach((val) => {
      arrayOfVal.push(
        <div>
          <span>{val}</span>
          {"   "}
          <button>Click Me</button>
        </div>
      );
    });
    console.log("HELOOO", arrayOfVal);
    return arrayOfVal;
  };
  return (
    <>
      <div>
        <label>
          Enter Input Value
          <input type="text" value={inputVal} onChange={handleInputChange} />
        </label>
        {"      "}
        <button onClick={handleOnClick}>Submit</button>
        {isIpValuesSubmitted ? (
          <p>Your entered value is given below:{showInputValues()}</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
