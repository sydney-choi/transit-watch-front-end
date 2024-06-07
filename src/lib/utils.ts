export const convertSecToMinText = (target: number) => {
  const SECONDS_IN_A_MINUTE = 60;

  if (target === 0) {
    return '정보 없음';
  }

  const targetMinute = Math.trunc(target / SECONDS_IN_A_MINUTE);
  return targetMinute < 1 ? '곧 도착' : `${targetMinute}분`;
};

export const getCurrentTime = () => {
  const currentDate = new Date();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  return `${month}/${day} ${hours}:${minutes}`;
};
