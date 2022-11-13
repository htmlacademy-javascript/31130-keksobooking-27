import {
  getRandomNumber,
  getRandomFloatNumber,
  getRandomArrayElement,
  getRandomLengthArray
} from './utils.js';

const ADS_AMOUNT = 10;

const AvatarPath = {
  LEFT_PATH: 'img/avatars/user',
  RIGHT_PATH: '.png',
};

const ADS_TITLES = [
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

const getAuthorsPhotosArray = (leftPath, rightPath) => {
  const array = [];
  for (let ind = 1; ind <= ADS_AMOUNT; ind++) {
    array.push(leftPath + ind.toString().padStart(2, '0') + rightPath);
  }
  return array;
};

const authorsAvatars = getAuthorsPhotosArray(AvatarPath.LEFT_PATH, AvatarPath.RIGHT_PATH);

const createAuthor = () => ({
  avatar: getRandomArrayElement(authorsAvatars, true)
});

const createCoordinates = () => ({
  lat: getRandomFloatNumber(Location.LAT_MIN, Location.LAT_MAX, 5),
  lon: getRandomFloatNumber(Location.LNG_MIN, Location.LNG_MAX, 5)
});

const createOffer = () => ({
  title: getRandomArrayElement(ADS_TITLES),
  price: getRandomNumber(Price.MIN_PRICE, Price.MAX_PRICE),
  address: createCoordinates(),
  type: getRandomArrayElement(BUILDING_TYPES),
  rooms: getRandomNumber(1, MAX_ROOMS),
  guests: getRandomNumber(1, MAX_GUESTS),
  checkin: getRandomArrayElement(CHECKIN_HOURS),
  checkout: getRandomArrayElement(CHECKOUT_HOURS),
  features: getRandomLengthArray(FEATURES, true),
  description: 'Уютное жилище в оживлённой части города',
  photos: getRandomLengthArray(PHOTOS)
});

const createAd = () => ({
  author: createAuthor(),
  offer: createOffer(),
  location: createCoordinates(),
});

const createAds = () => Array.from({length: ADS_AMOUNT}, createAd);

export { createAds };
