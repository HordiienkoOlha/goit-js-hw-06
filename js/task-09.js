// Напиши скрипт, который изменяет цвета
// фона элемента < body > через инлайн стиль
// при клике на button.change - color и
// выводит значение цвета в span.color.

// <div class="widget">
//     <p>
//         Background color: <span class="color">-</span>
//     </p>
//     <button type="button" class="change-color">
//         Change color
//     </button>
// </div>;
const bodyColor = document.querySelector('body');
const colorRef = document.querySelector('.color');
console.log(colorRef);
const btnColor = document.querySelector('.change-color');

btnColor.addEventListener('click', () => {
    bodyColor.style.backgroundColor = getRandomHexColor();
    colorRef.textContent = bodyColor.style.backgroundColor;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
