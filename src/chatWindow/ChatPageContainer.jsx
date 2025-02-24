import React, { useState } from "react";
import "../styles.css";

const ChatPageContainer = () => {
  const [userAChat, setUserAChat] = useState("");
  const [userBChat, setUserBChat] = useState("");
  const [userASubmitChat, setUserASubmitChat] = useState([]);
  const [userBSubmitChat, setUserBSubmitChat] = useState([]);

  const getCurrentMsgTime = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let msTime = now.valueOf();
    const getTime = {
      time: `${hours}:${minutes}:${seconds}`,
      msTime,
    };
    console.log(getTime);
    return getTime;
  };

  const handleOnChangeOfChatA = (e) => {
    setUserAChat(e.target.value);
  };

  const handleOnChangeOfChatB = (e) => {
    setUserBChat(e.target.value);
  };

  const handelOnClickForUserA = () => {
    const updatedUserAChat = [...userASubmitChat];
    updatedUserAChat.push({
      id: Math.random(),
      userName: "UserA",
      msgTime: getCurrentMsgTime().time,
      msgByUser: userAChat,
      msgTimeinMs: getCurrentMsgTime().msTime,
    });
    setUserASubmitChat(updatedUserAChat);
    setUserAChat("");
  };

  const handelOnClickForUserB = () => {
    const updatedUserBChat = [...userBSubmitChat];
    updatedUserBChat.push({
      id: Math.random(),
      userName: "UserB",
      msgTime: getCurrentMsgTime().time,
      msgByUser: userBChat,
      msgTimeinMs: getCurrentMsgTime().msTime,
    });
    setUserBSubmitChat(updatedUserBChat);
    setUserBChat("");
  };

  const combinedChatList = [...userASubmitChat, ...userBSubmitChat];
  combinedChatList.sort((prevMsgTime, currentMsgTime) => {
    return prevMsgTime.msgTimeinMs - currentMsgTime.msgTimeinMs;
  });
  console.log(combinedChatList);

  const handleDeleteMsg = (id) => {
    const updatedMsgArrA = [...userASubmitChat];
    const updatedMsgArrB = [...userBSubmitChat];

    const indexOfMsgToBeDeletedFromA = updatedMsgArrA.findIndex(
      (user) => user.id === id
    );

    if (indexOfMsgToBeDeletedFromA !== -1) {
      updatedMsgArrA.splice(indexOfMsgToBeDeletedFromA, 1);
      setUserASubmitChat(updatedMsgArrA);
    } else {
      const indexOfMsgToBeDeletedFromB = updatedMsgArrB.findIndex(
        (user) => user.id === id
      );
      if (indexOfMsgToBeDeletedFromB !== -1) {
        updatedMsgArrB.splice(indexOfMsgToBeDeletedFromB, 1);
        setUserBSubmitChat(updatedMsgArrB);
      }
    }
  };

  return (
    <>
      <div>
        <label>User A</label>
        {"  "}
        <input type="text" value={userAChat} onChange={handleOnChangeOfChatA} />
        <button onClick={handelOnClickForUserA} disabled={!userAChat}>
          SubmitA
        </button>
      </div>
      <div>
        <label>User B</label>
        {"  "}
        <input type="text" value={userBChat} onChange={handleOnChangeOfChatB} />
        <button onClick={handelOnClickForUserB} disabled={!userBChat}>
          SubmitB
        </button>
      </div>
      <div>
        <h2>ChatWindow</h2>
        {combinedChatList.map((user) => (
          <div
            id="msgContainer"
            className={user.userName === "UserA" ? "align-left" : "align-right"}
          >
            {user.msgByUser}
            {"     "}
            {user.msgTime}
            {"       "}
            <button onClick={() => handleDeleteMsg(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatPageContainer;
