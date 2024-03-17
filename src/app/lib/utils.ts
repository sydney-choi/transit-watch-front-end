export const convertSecToMinText = (target: string) => {
  const ONE_MINUTE = 1;
  const targetSeconds = parseInt(target, 10);
  const targetMinute = Math.trunc(targetSeconds / 60);
  let elapsedText = '';

  if (targetMinute < ONE_MINUTE) {
    elapsedText = '곧 도착';
  } else {
    elapsedText = `${targetMinute  }분`;
  }

  return elapsedText;
};
