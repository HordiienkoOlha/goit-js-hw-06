// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.

// Добавь слушатели кликов на кнопки, внутри которых увеличивай
// или уменьшай значение счтетчика.

// Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0;
const action = document.querySelectorAll('button');
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const eventDecrement = () => {
    counterValue -= 1;
    value.textContent = counterValue
    console.log(counterValue);
};
const eventIncrement = () => {
    counterValue += 1;
    value.textContent = counterValue
    console.log(counterValue);
};

buttonMinus.addEventListener('click', eventDecrement);
buttonPlus.addEventListener('click', eventIncrement);