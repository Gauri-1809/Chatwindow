import React, { useState, useEffect } from "react";

// export const Examples = () => {
//   const names = ["Brian", "Paul", "Krug", "Halley"];
//   const listItems = names.map((name) => <li>{name}</li>);
//   return <ul>{listItems}</ul>;
// };
// export default Examples;
function Examples() {
  const items = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
  ];
  const listItems = items.map((item, index) => (
    <li key={index}>
      {item.id} {item.text}
    </li>
  ));
  return <ul>{listItems}</ul>;
}
export default Examples;
