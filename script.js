function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*
function nanMin() {
    if (isNaN(minValue)) {
        return minValue = -999;
    } else if (minValue <= -1000) {
        return minValue = -999;
    } else {
        return minValue;
    }
}*/
function nanMax() {
    if (isNaN(maxValue)) {
        return maxValue = 999;
    } else if (maxValue >= 1000) {
        return maxValue = 999;
    } else {
        return maxValue;
    }
}


function minMinValue() {
    minValue =  (minValueq <= -1000) ? "444" : "555";
}
let minValue = -999;
let minValueq = parseInt(prompt('Минимальное знание числа для игры', '1'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));

minValue = minMinValue(minValueq);
maxValue = nanMax(maxValue);

let arrСondition = [`Загадайте любое целое число от ${minValue} до ${maxValue}, я буду его отгадывать`, `Загадайте любое целое число от ${minValue} до ${maxValue}, я быстро справлюсь`, `Придумайте целое число от ${minValue} до ${maxValue}, я его отгадаю`];
condition = arrСondition[getRandomInRange(0, 2)];
alert(condition);

let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

let orderNumberField = document.getElementById('orderNumberField');
let answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '1'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));

    arrСondition = [`Загадайте любое целое число от ${minValue} до ${maxValue}, я буду его отгадывать`, `Загадайте любое целое число от ${minValue} до ${maxValue}, я быстро справлюсь`, `Придумайте целое число от ${minValue} до ${maxValue}, я его отгадаю`];
    condition = arrСondition[getRandomInRange(0, 2)];
    alert(condition);

    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    arrQestion = [`Вы загадали число ${answerNumber}?`, `Наверное, это число ${answerNumber}?`, `Возможно это число ${answerNumber}?`];
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
        if (minValue === maxValue || maxValue < minValue || minValue > answerNumber - 1) {
            const arrAnswerPhrase = [`Вы загадали неправильное число!\n\u{1F914}`, `Я сдаюсь..\n\u{1F92F}`, `Что то вы меня обманываете\n\u{1F635}`];
            answerPhrase = arrAnswerPhrase[getRandomInRange(0, 2)];
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
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