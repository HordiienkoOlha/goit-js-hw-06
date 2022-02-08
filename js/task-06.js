// Напиши скрипт, который при потере фокуса
// на инпуте(событие blur),

// проверяет его содержимое  на правильное количество введённых символов.
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.

// Если введено подходящее количество символов,
//     то border инпута становится зелёным,
//         если неправильное - красным.

// Для добавления стилей, используй CSS - классы
//  valid и invalid, которые мы уже добавили
//  в исходные файлы задания.
const inputText = document.querySelector('#validation-input');
// console.log (inputText);

inputText.addEventListener('blur', editStyle);

function editStyle(event) {
    // event.preventDefault();

    const userInput = event.currentTarget.value.length;
    
    const lengthInput = inputText.getAttribute('data-length');

    
    if (Number(userInput) === Number(lengthInput)) {
        this.classList.add('valid');
        this.classList.remove('invalid');
    } else {
        this.classList.add('invalid');
        this.classList.remove('valid');
    }
}
