const getRandomNumber = (min, max) => {

  if (max < 0 || min < 0) {
    return NaN;
  }

  if (max < min) {
    const buf = max;
    max = min;
    min = buf;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gerRandomFloatNumber = (min, max, howManyDecimals) => {

  if (max < 0 || min < 0 || howManyDecimals <= 0) {
    return NaN;
  }

  if (max < min) {
    const buf = max;
    max = min;
    min = buf;
  }

  return (Math.random() * (max - min + 1) + min).toFixed(howManyDecimals);
};

getRandomNumber(0, 25);
gerRandomFloatNumber(5.78, 10.134, 4);
