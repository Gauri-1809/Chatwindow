import React, { useState } from "react";
import { getMsgTime } from "./utils";
import "../ChatPage.css";

const UserATextMsgs = () => {
  const [userA, setUserA] = useState("");
  const [sendUserAChat, setSendUserAChat] = useState([]);
  const [editMsg, setEditMsg] = useState("");
  const [editMsgId, setEditMsgId] = useState("");
  const [editButtonClicked, setEditButtonClicked] = useState(false);

  const handelOnChangeOfUserA = (e) => {
    setUserA(e.target.value);
  };

  const handelOnClickOfUserA = (e) => {
    const arrayOfSentMsgs = [...sendUserAChat];
    arrayOfSentMsgs.push({
      id: Math.random(),
      msgsender: "User A",
      msgText: userA,
      msgTime: getMsgTime().time,
      msgTimeInMs: getMsgTime().timeInms,
    });
    setSendUserAChat(arrayOfSentMsgs);
    setUserA("");
  };

  const handleDeleteMsgsOfUser = (id) => {
    const arrayOfSentMsgsForDeletion = [...sendUserAChat];
    const indexOfMsgs = arrayOfSentMsgsForDeletion.findIndex(
      (user) => user.id == id
    );
    if (indexOfMsgs !== -1) {
      arrayOfSentMsgsForDeletion.splice(indexOfMsgs, 1);
      setSendUserAChat(arrayOfSentMsgsForDeletion);
    }
  };

  const handleEditMsgsOfUser = (id, msg) => {
    setEditButtonClicked(true);
    setEditMsgId(id);
    setEditMsg(msg);
  };

  const handelOnChangeForEditOfUserA = (e) => {
    setEditMsg(e.target.value);
  };

  const handleUpdatedMsgsOfUser = (id) => {
    const updateArrayOfMsgs = [...sendUserAChat];
    const indexOfMsgs = updateArrayOfMsgs.findIndex((user) => user.id == id);
    if (indexOfMsgs !== -1) {
      updateArrayOfMsgs[indexOfMsgs].msgText = editMsg;
      setSendUserAChat(updateArrayOfMsgs);
      setEditButtonClicked(false);
    }
  };

  const combinedUserAchatList = [...sendUserAChat];
  combinedUserAchatList.sort((prevTime, curTime) => {
    console.log(prevTime, curTime);
    return prevTime.msgTimeInMs - curTime.msgTimeInMs;
  });

  return (
    <>
      <div className="message-list">
        <span>
          <span>
            <label>UserA</label>
            <input type="text" value={userA} onChange={handelOnChangeOfUserA} />
          </span>
          <button onClick={handelOnClickOfUserA} disabled={!userA}>
            Send
          </button>
          <div>
            {combinedUserAchatList.map((user) => (
              <span>
                <p className="message-input">
                  {user.id === editMsgId && editButtonClicked ? (
                    <span>
                      <input
                        type="text"
                        value={editMsg}
                        onChange={handelOnChangeForEditOfUserA}
                      />
                      <button
                        onClick={() => handleUpdatedMsgsOfUser(user.id)}
                        disabled={!editMsg}
                      >
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
              </span>
            ))}
          </div>
        </span>
      </div>
    </>
  );
};

export default UserATextMsgs;
