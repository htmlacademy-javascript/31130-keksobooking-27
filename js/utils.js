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

const getRandomFloatNumber = (min, max, howManyDecimals) => {

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

const getRandomArrayElement = (array, changingOrigin = false) => {
  const randomIndex = getRandomNumber(0, array.length - 1);
  const element = array[randomIndex];

  if (changingOrigin) {
    array.splice(randomIndex, 1);
  }
  return element;
};

const getRandomLengthArray = (array, unique = false) => {
  const newArrayLength = unique ?
    getRandomNumber(1, array.length) : getRandomNumber(1, 10);
  const copyArray = array.slice();
  const newArray = [];

  for (let ind = 0; ind <= newArrayLength - 1; ind++) {

    while (newArray.length < newArrayLength) {
      const element = copyArray[getRandomNumber(0, copyArray.length - 1)];
      const copyArrayIndex = copyArray.indexOf(element);
      newArray.push(element);

      if (unique) {
        copyArray.splice(copyArrayIndex, 1);
      }
      break;
    }
  }
  return newArray;
};

export {
  getRandomNumber,
  getRandomFloatNumber,
  getRandomArrayElement,
  getRandomLengthArray
};
