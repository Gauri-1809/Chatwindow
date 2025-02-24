import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ChatPageContainer from "./chatWindow/ChatPageContainer";
import ChatPageContainerWithEditNdDelete from "./chatWindow/ChatPageContainerWithEditNdDelete";
import CombineUsersChat from "./chatWindow/chatWindowPro/CombineUsersChat";
import CodeReview from "./CodeReview";
import { DecrementCount } from "./counter/DecrementCount";
import { IncrementCount } from "./counter/IncrementCount";
import { CurrencyConverter } from "./currency-converter/CurrencyConverter";
import CurrencyConvertorPart2 from "./currency-converter/CurrencyConvertorPart2";
import Examples from "./Examples";
import { CreateTable } from "./numberTable/CreateTable";
import { DisplayListOP } from "./numberTable/listOP/displayMultipleInputList";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <IncrementCount count={count} setCount={setCount} />
      <DecrementCount count={count} setCount={setCount} />
      <p>Current value of Counter :{count}</p> 
      <CreateTable />
      <ToastContainer />
        <DisplayListOP />
         <Examples />
         <CurrencyConverter />
         <CurrencyConvertorPart2 />
          <ChatPageContainer />

     */}

      {/* <ChatPageContainerWithEditNdDelete /> */}
      <CombineUsersChat />
      <CodeReview />
    </div>
  );
}
