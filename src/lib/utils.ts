export const convertSecToMinText = (target: number) => {
  const ONE_MINUTE = 1;
  const targetMinute = Math.trunc(target / 60);
  let elapsedText = '';

  if (targetMinute < ONE_MINUTE) {
    elapsedText = '곧 도착';
  } else {
    elapsedText = `${targetMinute}분`;
  }

  return elapsedText;
};

export const getCurrentTime = () => {
  const currentDate = new Date();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  return `${month}/${day} ${hours}:${minutes}`;
};
