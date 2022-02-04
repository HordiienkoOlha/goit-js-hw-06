const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
// Напиши скрипт, который для каждого
// элемента массива ingredients:

// Создаст отдельный элемент < li >.
// Обзательно используй метод
// document.createElement().

// Добавит название ингредиента как
// его текстовое содержимое.

// Добавит элементу класс item.
// После чего вставит все < li > за одну
// операцию в список ul.ingredients.
//  Создаём и добавляем новый пункт меню
//  /
const listElement = document.querySelector('ul');

const makeList = options => {
  return options.map(option => {
    const newItemEl = document.createElement('li');
    newItemEl.classList.add('item');
    newItemEl.textContent = option;
    return newItemEl;
  });
};
  
const elements = makeList(ingredients);
listElement.append(...elements);


