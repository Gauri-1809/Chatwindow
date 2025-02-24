import React, { useState } from "react";
//1USD=0.96 Euro
//1EUR=1.5USD

const CurrencyConvertorPart2 = () => {
  const [amount, setAmount] = useState("");
  const [convertedAmt, setConvertedAmt] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [fromCountry, setFromCountry] = useState("");

  const fromCountryNames = [
    {
      id: 1,
      label: "USD",
      value: "USD",
      exchangeCurrencyRate1: 86.71,
      exchangeCurrencyRate2: 0.96,
    },
    {
      id: 2,
      label: "EUR",
      value: "EUR",
      exchangeCurrencyRate1: 89.81,
      exchangeCurrencyRate2: 1.5,
    },
    { id: 3, label: "INR", value: "INR", exchangeCurrencyRate1: 1 },
  ];

  const toCountryNames = [
    {
      id: 1,
      label: "USD",
      value: "USD",
      exchangeCurrencyRate1: 86.71,
      exchangeCurrencyRate2: 0.96,
    },
    { id: 2, label: "EUR", value: "EUR", exchangeCurrencyRate1: 89.81 },
    { id: 3, label: "INR", value: "INR", exchangeCurrencyRate1: 1 },
  ];

  const handelOnChangeAmount = (e) => {
    console.log("Hekkkkk");
    setAmount(e.target.value);
    setConvertedAmt("");
  };

  const handelOnClick = () => {
    if (toCountry && fromCountry) {
      const selectFromCountryName = fromCountryNames.find(
        (country) => country.value === fromCountry
      );
      const selectToCountryName = toCountryNames.find(
        (country) => country.value === toCountry
      );
      console.log(selectFromCountryName);
      console.log(selectToCountryName);

      if (selectFromCountryName.value !== "INR") {
        const convertedVal =
          amount * selectFromCountryName.exchangeCurrencyRate1;
        setConvertedAmt(convertedVal);
      } else if (selectToCountryName.value !== "INR") {
        const convertedVal = amount / selectToCountryName.exchangeCurrencyRate1;
        setConvertedAmt(convertedVal);
      }
    }

    setAmount(" ");
  };

  const handelOnChangeForFromCountry = (e) => {
    setFromCountry(e.target.value);
  };

  const handelOnChangeForToCountry = (e) => {
    setToCountry(e.target.value);
  };

  return (
    <>
      <div>
        <label>Enter Amount</label>
        {"    "}
        <input type="number" value={amount} onChange={handelOnChangeAmount} />
        {"    "}
        <label>From</label>
        <select name="fromCountry" onChange={handelOnChangeForFromCountry}>
          {fromCountryNames.map((fromCountryOps) => (
            <option key={fromCountryOps.id} value={fromCountryOps.label}>
              {fromCountryOps.value}
            </option>
          ))}
        </select>
        {"  "}
        <label>To</label>
        <select name="toCountry" onChange={handelOnChangeForToCountry}>
          {toCountryNames.map((toCountryOps) => (
            <option key={toCountryOps.id} value={toCountryOps.label}>
              {toCountryOps.value}
            </option>
          ))}
        </select>
        {"  "}
        <button onClick={handelOnClick} disabled={!amount}>
          Convert
        </button>
        {convertedAmt ? <p> Your converted amount is: {convertedAmt}</p> : " "}
      </div>
    </>
  );
};

export default CurrencyConvertorPart2;
