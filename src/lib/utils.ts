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
