import React from "react";

const CodeReview = () => {
  const a = 1;
  const b = "sdjefef";
  const c = 23243894594359478437837587458437543398;
  const d = true;
  const e = Symbol("Hiiii");
  const f = null;
  let g;
  console.log("type of g is", typeof g);

  console.log("type of f is", f);

  const dataTypeArr = [
    1,
    "dsfsf",
    23243894594359478437837587458437543398n,
    true,
    Symbol("Hiiii"),
    null,
    undefined,
  ];
  dataTypeArr.map((data) => console.log("type of", data, "is", typeof data));

  const dataTypeArrOfObj = [
    { value: 123, dataType: typeof 123 },
    { value: "asad", dataType: typeof "asad" },
    { value: true, dataType: typeof true },
    { value: 1234n, dataType: typeof 1234n },
    { value: undefined, dataType: typeof undefined },
    { value: null, dataType: typeof null },
    { value: Symbol("sad"), dataType: typeof Symbol("sad") },
  ];

  dataTypeArrOfObj.map((data) =>
    console.log("type of", data.value, "is", data.dataType)
  );

  return <>Hellooo</>;
};
export default CodeReview;
