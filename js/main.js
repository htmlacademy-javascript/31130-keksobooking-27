/* eslint-disable no-trailing-spaces */
const ADS_AMOUNT = 10;

const AvatarPath = {
  LEFT_PATH: 'img/avatars/user',
  RIGHT_PATH: '.png',
};

const AD_TITLES = [
  'Уютный особняк',
  'Отличная квартира для большой семьи',
  'Студия рядом с метро',
  'Квартира по цене студии в спальном районе',
  'Прекрасные апартаменты в центре города',
  'Апарт отель',
  'Прекрасная квартира в двух шагах от парка'
];

const Price = {
  MIN_PRICE: 1000000,
  MAX_PRICE: 100000000
};

const BUILDING_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const MAX_ROOMS = 6;
const MAX_GUESTS = 6;

const CHECKIN_HOURS = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT_HOURS = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const Location = {
  LAT_MIN: 35.65,
  LAT_MAX: 35.7,
  LNG_MIN: 139.7,
  LNG_MAX: 139.8
};

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

const getAuthorsPhotosArray = (leftPath, rightPath) => {
  const array = [];
  for (let ind = 1; ind <= ADS_AMOUNT; ind++) {
    array.push(leftPath + ind.toString().padStart(2, '0') + rightPath);
  }
  return array;
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

      if (unique === true) {
        copyArray.splice(copyArrayIndex, 1);
      }
      break;
    }
  }
  return newArray;
};

const authorsAvatars = getAuthorsPhotosArray(AvatarPath.LEFT_PATH, AvatarPath.RIGHT_PATH);

// eslint-disable-next-line no-return-assign, no-undef
const createAuthor = () => getRandomArrayElement(authorsAvatars, changingOrigin = true);
// не очень понимаю, чем линтеру не угодил параметр, который надо указывать через = и почему он undefined для него

// eslint-disable-next-line no-return-assign
const createOffer = () => ({
  title: getRandomArrayElement(AD_TITLES),
  address: this.location,
  price: getRandomNumber(Price.MIN_PRICE, Price.MAX_PRICE),
  type: getRandomArrayElement(BUILDING_TYPES),
  rooms: getRandomNumber(1, MAX_ROOMS),
  guests: getRandomNumber(1, MAX_GUESTS),
  checkin: getRandomArrayElement(CHECKIN_HOURS),
  checkout: getRandomArrayElement(CHECKOUT_HOURS),
  // eslint-disable-next-line no-undef
  features: getRandomLengthArray(FEATURES, unique = true),
  description: 'Уютное жилище в оживлённой части города',
  photos: getRandomLengthArray(PHOTOS)
});

const createCoordinates = () => ({
  lat: getRandomFloatNumber(Location.LAT_MIN, Location.LAT_MAX, 5),
  lon: getRandomFloatNumber(Location.LNG_MIN, Location.LNG_MAX, 5)
});

const createAd = () => ({
  author: createAuthor(),
  offer: createOffer(),
  location: createCoordinates(),
});

// eslint-disable-next-line no-unused-vars
const someAds = Array.from({length: ADS_AMOUNT}, createAd);
