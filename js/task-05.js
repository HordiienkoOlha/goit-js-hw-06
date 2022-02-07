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

nameInput.addEventListener('input', event => {
    event.preventDefault();
    
    console.log(event.currentTarget.value);
    const userInput = event.currentTarget.value;
    nameOutput.textContent = userInput;

    if (!userInput) return;
    
});

// const nameInput = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');

// nameInput.addEventListener('input', inputEvent)

// function inputEvent(event) {
//     event.preventDefault();

//     const userInput = event.currentTarget.value;
//     nameOutput.textContent = userInput;
// console.log(userInput);
//     if (!userInput) return;
// }