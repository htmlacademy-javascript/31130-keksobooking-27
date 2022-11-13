import { createAds } from './data.js';
import { createCardElement } from './card.js';


const ads = createAds();
createCardElement(ads[0]);

// Вроде как здесь должны быть сгенерированные данные
// И здесь же должен запуск создания HTML элементов
