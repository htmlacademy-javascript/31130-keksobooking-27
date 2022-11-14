const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');


const disableForm = () => {
  adForm.classList.add('ad-form--disabled');

  const adFormElements = adForm.children;
  adFormElements.forEach((adFormElement) => {
    adFormElement.setAttribute('disabled', true);
  });

  mapFilters.classList.add('disabled');

  const mapFiltersElements = mapFilters.children;
  mapFiltersElements.forEach((mapFiltersElement) => {
    mapFiltersElement.setAttribute('disabled', true);
  });
};

const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');

  const adFormElements = adForm.children;
  adFormElements.forEach((adFormElement) => {
    adFormElement.removeAttribute('disabled', true);
  });

  mapFilters.classList.remove('disabled');

  const mapFiltersElements = mapFilters.children;
  mapFiltersElements.forEach((mapFiltersElement) => {
    mapFiltersElement.removeAttribute('disabled', true);
  });
};

export { disableForm, enableForm };
