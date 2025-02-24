import React, { useState } from "react";

//1 USD =86.71 INR
//1 EUR= 89.81 INR

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [convertedValue, setConvertedValue] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [fromCountry, setFromCountry] = useState("");

  const fromCountryOptions = [
    {
      id: 1,
      label: "USD",
      value: "USD",
      exchangeRate: 86.71,
    },
    {
      id: 2,
      label: "EUR",
      value: "EUR",
      exchangeRate: 89.81,
    },
    {
      id: 3,
      label: "INR",
      value: "INR",
      exchangeRate: 1,
    },
  ];

  const toCountryOptions = [
    {
      id: 1,
      label: "INR",
      value: "INR",
      exchangeRate: 1,
    },
    {
      id: 2,
      label: "USD",
      value: "USD",
      exchangeRate: 86.71,
    },
    {
      id: 3,
      label: "EUR",
      value: "EUR",
      exchangeRate: 89.81,
    },
  ];

  const handleOnClick = () => {
    if (toCountry && fromCountry) {
      const selectedFromVal = fromCountryOptions.find(
        (country) => country.id === Number(fromCountry)
      );
      console.log(selectedFromVal);
      const selectedToVal = toCountryOptions.find(
        (country) => country.id === Number(toCountry)
      );
      console.log(selectedToVal);
      if (selectedFromVal.value !== "INR") {
        const convertedAmt = amount * selectedFromVal.exchangeRate;
        console.log(convertedAmt);
        setConvertedValue(Number(convertedAmt));
      } else if (selectedToVal.value !== "INR") {
        const convertedAmt = amount / selectedToVal.exchangeRate;
        console.log(convertedAmt);
        setConvertedValue(Number(convertedAmt));
      }
    }
    setAmount("");
  };

  const handleOnChange = (e) => {
    setAmount(e.target.value);
    setConvertedValue("");
  };

  const handleOnChangeforFromCountry = (e) => {
    setFromCountry(e.target.value);
    console.log(e.target.value);
  };

  const handleOnChangeforToCountry = (e) => {
    setToCountry(e.target.value);
    console.log(JSON.stringify(e.target.value));
  };

  return (
    <>
      <div>
        <label>Enter Amount </label>
        <input type="number" value={amount} onChange={handleOnChange} />
        <label>from</label>
        <select name="fromCountry" onChange={handleOnChangeforFromCountry}>
          {fromCountryOptions.map((fromCountryOps) => (
            <option key={fromCountryOps.label} value={fromCountryOps.id}>
              {fromCountryOps.value}
            </option>
          ))}
        </select>
        <label>To</label>
        <select name="toCountry" onChange={handleOnChangeforToCountry}>
          {toCountryOptions.map((toCountryOps) => (
            <option key={toCountryOps.id} value={toCountryOps.label}>
              {toCountryOps.value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          onClick={handleOnClick}
          disabled={!amount || !fromCountry || !toCountry}
        >
          Convert
        </button>
        {convertedValue ? <p>Your converted amount is:{convertedValue}</p> : ""}
      </div>
    </>
  );
};
