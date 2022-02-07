// Напиши скрипт который,
// при наборе текста в инпуте
// input#name - input(событие
// input),
// подставляет его текущее
// значение в span#name - output.

// Если инпут пустой, в спане должна
// отображаться строка "Anonymous".

const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');
console.log(nameOutput.textContent);

nameInput.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const inputElem = event.currentTarget.elements;
    console.log(inputElem);

    if (login.value === '' || password.value === '') {
        return console.log('Please fill in all the fields!');
    }

    console.log(`Login: ${login.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}

// console.log(nameOutput.textContent);
// if (!userInput) {
//     nameOutput.textContent
// };
