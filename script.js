let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));

let arrСondition = [`Загадайте любое целое число от ${minValue} до ${maxValue}, я отградаю его максимум за 6 попыток`, `Загадайте любое целое число от ${minValue} до ${maxValue}, я быстро справлюсь, максимум за 6 раз`, `Придумайте целое число от ${minValue} до ${maxValue}, я его отгадаю`];

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
condition = arrСondition[getRandomInRange(0, 2)];
alert(condition);

let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));

    arrСondition = [`Загадайте любое целое число от ${minValue} до ${maxValue}, я отградаю его максимум за 6 попыток`, `Загадайте любое целое число от ${minValue} до ${maxValue}, я быстро справлюсь, максимум за 6 раз`, `Придумайте целое число от ${minValue} до ${maxValue}, я его отгадаю`];
    Сondition = arrСondition[getRandomInRange(0, 2)];
    alert(Сondition);

    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    arrQestion = [`Вы загадали число ${answerNumber}?`, `Наверное, это число ${answerNumber}?`, `Возможно это число ${answerNumber}?`];

    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    qestion = arrQestion[getRandomInRange(0, 2)];

    orderNumberField.innerText = orderNumber;
    answerField.innerText = qestion;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const arrAnswerPhrase = [`Вы загадали неправильное число!\n\u{1F914}`, `Я сдаюсь..\n\u{1F92F}`, `Что то вы меня обманываете\n\u{1F635}`];
            answerPhrase = arrAnswerPhrase[getRandomInRange(0, 2)];
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const arrAnswerFieldQ = [`Вы загадали число ${answerNumber}?`, `Возможно это число ${answerNumber}?`, `Наверное, это число ${answerNumber}?`];
            answerFieldQ = arrAnswerFieldQ[getRandomInRange(0, 2)];
            answerField.innerText = answerFieldQ;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (maxValue === minValue) {
            const arrAnswerPhrase = [`Вы загадали неправильное число!\n\u{1F914}`, `Я сдаюсь..\n\u{1F92F}`, `Что то вы меня обманываете\n\u{1F635}`];
            answerPhrase = arrAnswerPhrase[getRandomInRange(0, 2)];
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const arrAnswerFieldQ = [`Вы загадали число ${answerNumber}?`, `Возможно это число ${answerNumber}?`, `Наверное, это число ${answerNumber}?`];
            answerFieldQ = arrAnswerFieldQ[getRandomInRange(0, 2)];
            answerField.innerText = answerFieldQ;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const arrEqual = [`Я всегда угадываю\n\u{1F60E}`, `Это было легко\n\u{1F60E}`, `Как все просто\n\u{1F60E}`];
        equal = arrEqual[getRandomInRange(0, 2)];
        answerField.innerText = equal;
        gameRun = false;
    }
})