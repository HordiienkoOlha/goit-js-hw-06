// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя
// свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
// console.log(text);

inputRange.addEventListener('input', editFontSize);

function editFontSize(event) {
    const userInput = event.currentTarget.value;
    // console.log(userInput);
    text.style.fontSize = `${userInput}px`;
}
