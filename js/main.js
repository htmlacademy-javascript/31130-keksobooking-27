import { createAds } from './data.js';
import { createCardElement } from './card.js';
import { disableForm, enableForm } from './form.js';

const ads = createAds();
createCardElement(ads[0]);
disableForm();
