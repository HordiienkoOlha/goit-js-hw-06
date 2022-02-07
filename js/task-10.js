// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>
//   <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает
// один параметр - число.Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире
// и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает
// содержимое div#boxes, тем самым удаляя все созданные элементы.
const controlsRef = document.querySelector('#controls');
// console.log(controlsRef);
const inputRef = document.querySelector('input');
// console.log(inputRef);
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
inputRef = ;
console.log(inputRef);
function createBoxes(amount) {
    let amount = 0;
}
function destroyBoxes(amount) {
    amount = 0;
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
