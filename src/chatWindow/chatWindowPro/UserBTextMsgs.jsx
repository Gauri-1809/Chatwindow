import React, { useState } from "react";
import { getMsgTime } from "./utils";
import "../ChatPage.css";

const UserBTextMsgs = () => {
  const [userB, setUserB] = useState("");
  const [sendUserBChat, setSendUserBChat] = useState([]);
  const [editMsg, setEditMsg] = useState("");
  const [editMsgId, setEditMsgId] = useState("");
  const [editButtonClicked, setEditButtonClicked] = useState(false);

  const handelOnChangeOfUserB = (e) => {
    setUserB(e.target.value);
  };

  const handelOnClickOfUserB = (e) => {
    const arrayOfSentMsgs = [...sendUserBChat];
    arrayOfSentMsgs.push({
      id: Math.random(),
      msgSender: "User B",
      msgText: userB,
      msgTime: getMsgTime().time,
      msgTimeInMs: getMsgTime().timeInms,
    });
    console.log(arrayOfSentMsgs);
    setSendUserBChat(arrayOfSentMsgs);
    setUserB("");
  };

  const handleDeleteMsgsOfUser = (id) => {
    const arrayOfSentMsgsForDeletion = [...sendUserBChat];
    const indexOfMsgs = arrayOfSentMsgsForDeletion.findIndex(
      (user) => user.id == id
    );
    if (indexOfMsgs !== -1) {
      arrayOfSentMsgsForDeletion.splice(indexOfMsgs, 1);
      setSendUserBChat(arrayOfSentMsgsForDeletion);
    }
  };

  const handleEditMsgsOfUser = (id, msg) => {
    setEditButtonClicked(true);
    setEditMsgId(id);
    setEditMsg(msg);
  };

  const handelOnChangeForEditOfUserB = (e) => {
    setEditMsg(e.target.value);
  };

  const handleUpdatedMsgsOfUser = (id) => {
    const updatedMsgArr = [...sendUserBChat];
    const indexOfMsgs = updatedMsgArr.findIndex((user) => user.id === id);
    if (indexOfMsgs !== -1) {
      updatedMsgArr[indexOfMsgs].msgText = editMsg;
      setSendUserBChat(updatedMsgArr);
      setEditButtonClicked(false);
    }
  };

  const combinedUserBchatList = [...sendUserBChat];
  combinedUserBchatList.sort((prevTime, curTime) => {
    return prevTime.msgTimeInMs - curTime.msgTimeInMs;
  });

  return (
    <>
      <div className="message-list">
        <span>
          <label>UserB</label>
          {"   "}
          <input type="text" value={userB} onChange={handelOnChangeOfUserB} />
          {"   "}
          <button onClick={handelOnClickOfUserB} disabled={!userB}>
            Send
          </button>
          <div>
            {combinedUserBchatList.map((user) => (
              <p className="message-input">
                {user.id === editMsgId && editButtonClicked ? (
                  <span>
                    <input
                      type="text"
                      value={editMsg}
                      onChange={handelOnChangeForEditOfUserB}
                    />
                    <button onClick={() => handleUpdatedMsgsOfUser(user.id)}>
                      Update
                    </button>
                  </span>
                ) : (
                  <div className={`message ${user.msgSender}`}>
                    {user.msgText}
                  </div>
                )}

                <button
                  onClick={() => handleEditMsgsOfUser(user.id, user.msgText)}
                >
                  Edit
                </button>
                <span className="message-input-delete">
                  <button onClick={() => handleDeleteMsgsOfUser(user.id)}>
                    Delete
                  </button>
                </span>
              </p>
            ))}
          </div>
        </span>
      </div>
    </>
  );
};

export default UserBTextMsgs;
