import React, { useState } from "react";

const ChatPageContainerWithEditNdDelete = () => {
  const [userA, setUserA] = useState("");
  const [sendUserAChat, setSendUserAChat] = useState([]);
  const [editMsgId, setEditMsgId] = useState("");
  const [editMsg, setEditMsg] = useState("");
  const [editButtonClicked, setEditButtonClicked] = useState(false);

  const handelOnChangeOfUserA = (e) => {
    setUserA(e.target.value);
  };

  const handelOnChangeForEditOfUserA = (e) => {
    setEditMsg(e.target.value);
  };

  const getMsgTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const sec = now.getSeconds();
    const msTime = now.valueOf();

    const getTime = {
      time: `${hours}:${minutes}:${sec}`,
      timeInms: msTime,
    };
    return getTime;
  };

  const handelOnClickOfUserA = (e) => {
    const updatedUserMsg = [...sendUserAChat];
    updatedUserMsg.push({
      id: Math.random(),
      msgText: userA,
      msgTime: getMsgTime().time,
      msgTimeInMs: getMsgTime().timeInms,
    });
    setSendUserAChat(updatedUserMsg);
    setUserA("");
    setEditButtonClicked(false);
  };

  const handleDeleteMsgs = (id) => {
    const updatedArrayOfMsgs = [...sendUserAChat];
    const indexOfMsgs = updatedArrayOfMsgs.findIndex((user) => user.id === id);
    if (indexOfMsgs !== -1) {
      updatedArrayOfMsgs.splice(indexOfMsgs, 1);
      setSendUserAChat(updatedArrayOfMsgs);
    }
  };

  const handleEditMsg = (id) => {
    setEditButtonClicked(true);
    setEditMsgId(id);
  };

  const handleUpdateMsg = (id) => {
    const updatedArrayOfEditedMsgs = [...sendUserAChat];
    const indexOfMsgs = updatedArrayOfEditedMsgs.findIndex(
      (user) => user.id === id
    );
    if (indexOfMsgs !== -1) {
      updatedArrayOfEditedMsgs[indexOfMsgs].msgText = editMsg;
      setSendUserAChat(updatedArrayOfEditedMsgs);
      setEditButtonClicked(false);
    }
  };

  const combinedChatList = [...sendUserAChat];
  combinedChatList.sort((prevTime, curTime) => {
    return prevTime.msgTimeInMs - curTime.msgTimeInMs;
  });

  return (
    <>
      <div>
        <span>
          <label>UserA</label>
          {"   "}
          <input type="text" value={userA} onChange={handelOnChangeOfUserA} />
          {"   "}
          <button onClick={handelOnClickOfUserA} disabled={!userA}>
            Send
          </button>
        </span>
        <div>
          UserA messages :{" "}
          {combinedChatList.map((user) => (
            <span>
              {user.id === editMsgId && editButtonClicked ? (
                <span>
                  <input
                    type="text"
                    value={editMsg}
                    onChange={handelOnChangeForEditOfUserA}
                  />
                  <button
                    onClick={() => handleUpdateMsg(user.id)}
                    disabled={!editMsg}
                  >
                    Update
                  </button>
                </span>
              ) : (
                user.msgText
              )}
              {"    "}
              <button onClick={() => handleEditMsg(user.id)}>Edit</button>
              <button onClick={() => handleDeleteMsgs(user.id)}>Delete</button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatPageContainerWithEditNdDelete;
