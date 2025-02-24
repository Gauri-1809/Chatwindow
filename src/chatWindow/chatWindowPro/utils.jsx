export const getMsgTime = () => {
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

export const handleEditMsgsOfUser = () => {};

const handleUpdateMsgsOfUser = () => {};
