import React, { useState } from "react";
import UserATextMsgs from "./UserATextMsgs";
import UserBTextMsgs from "./UserBTextMsgs";
import "../ChatPage.css";

const CombineUsersChat = () => {
  return (
    <div className="messenger">
      <UserATextMsgs />
      <UserBTextMsgs />
    </div>
  );
};

export default CombineUsersChat;
