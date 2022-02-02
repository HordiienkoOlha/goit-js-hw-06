// Посчитает и выведет в консоль количество категорий
//  в ul#categories, то есть элементов li.item.

const categoriesElem = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesElem.length);

// Number of categories: 3

// Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов
// в категории(всех вложенных в него < li >).

categoriesElem.forEach(function (category) {
    console.log(`Category: `, category.firstElementChild.textContent);
    console.log(`Elements: `, category.lastElementChild.children.length);
});

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
