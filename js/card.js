const BUILDING_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const cardTemplateFragment = document.querySelector('#card')
  .content
  .querySelector('.popup');

const canvasForTemplates = document.querySelector('.map__canvas');

const createFeatures = (template, cardFeaturesData) => {
  const featuresList = template.querySelector('.popup__features');

  if (cardFeaturesData.length === 0) {
    featuresList.remove();
    return;
  }
  featuresList.innerHTML = '';

  for (const cardFeature of cardFeaturesData) {
    const featureElement = document.createElement('li');
    featureElement.classList = `popup__feature popup__feature--${cardFeature}`;
    featuresList.append(featureElement);
  }
};

const createPhotos = (template, cardPhotosData) => {
  const photoList = template.querySelector('.popup__photos');
  const photoListItem = photoList.querySelector('.popup__photo');

  if (cardPhotosData.length === 0) {
    photoList.remove();
    return;
  }
  photoList.innerHTML = '';

  for (const cardPhoto of cardPhotosData) {
    const templatePhotoListItem = photoListItem.cloneNode(true);
    templatePhotoListItem.src = cardPhoto;
    photoList.append(templatePhotoListItem);
  }
};

const fillElementContent = (element, data, attribute = 'textContent') => {
  if (data && data.length) {
    element[attribute] = data;
    return;
  }

  element.remove();
};

const createCardElement = (cardData) => {
  const cardTemplate = cardTemplateFragment.cloneNode(true);

  fillElementContent(
    cardTemplate.querySelector('.popup__title'),
    cardData.offer.title);
  fillElementContent(
    cardTemplate.querySelector('.popup__text--address'),
    cardData.offer.address);
  fillElementContent(
    cardTemplate.querySelector('.popup__text--price'),
    cardData.offer.price);
  fillElementContent(
    cardTemplate.querySelector('.popup__type'),
    BUILDING_TYPES[cardData.offer.type]);
  fillElementContent(
    cardTemplate.querySelector('.popup__text--capacity'),
    `${cardData.offer.rooms} комнат для ${cardData.offer.guests} гостей`);
  fillElementContent(
    cardTemplate.querySelector('.popup__text--time'),
    `Заезд после ${cardData.offer.checkin}, выезд до ${cardData.offer.checkout}`);
  fillElementContent(
    cardTemplate.querySelector('.popup__description'),
    cardData.offer.description);
  fillElementContent(
    cardTemplate.querySelector('.popup__avatar'),
    cardData.author.avatar,
    'src');

  createPhotos(cardTemplate, cardData.offer.photos);
  createFeatures(cardTemplate, cardData.offer.features);

  canvasForTemplates.append(cardTemplate);
};

export { createCardElement };
