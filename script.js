function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function limitMinValue() {
    minValue = (minValue <= -1000 || minValue >= 1000) || (isNaN(minValue)) ? -999 : minValue;
    return minValue;
}

function limitMaxValue() {
    maxValue = (maxValue >= 1000 || maxValue <= -1000) || (isNaN(maxValue)) ? 999 : maxValue;
    return maxValue;
}

function restartGameRun() {
    alert("Вы указали минимальное число больше или равное максимальному, пожалуйста укажите верный диапозон! Начнём все занова...");
    startGame();
    return
}

function startGame() {
    let gameRun = true;
    minValue = parseInt(prompt('Укажите минимальное знание числа для игры (минимум -999)', '1'));
    maxValue = parseInt(prompt('Укажите максимальное знание числа для игры (максимум 999)', '100'));
    minValue = limitMinValue(minValue);
    maxValue = limitMaxValue(maxValue);
    gameRun = minValue <= maxValue ? true : restartGameRun();
    let arrСondition = [`Загадайте любое целое число от ${minValue} до ${maxValue}, я буду его отгадывать`, `Введите любое целое число от ${minValue} до ${maxValue}, я быстро справлюсь`, `Придумайте целое число от ${minValue} до ${maxValue}, я его отгадаю`];
    let condition = arrСondition[getRandomInRange(0, 2)];
    alert(condition);

    let answerNumber = Math.floor((minValue + maxValue) / 2);
    let arrQestion = [`Вы загадали число ${answerNumber}?`, `Наверное, это число ${answerNumber}?`, `Возможно это число ${answerNumber}?`];
    let qestion = arrQestion[getRandomInRange(0, 2)];
    let orderNumber = 1;
    let orderNumberField = document.getElementById('orderNumberField');
    let answerField = document.getElementById('answerField');
    orderNumberField.innerText = orderNumber;
    answerField.innerText = qestion;
    const ARR_ANSWER_PHRASE = [`Вы загадали неправильное число!\n\u{1F914}`, `Я сдаюсь..\n\u{1F92F}`, `Что то вы меня обманываете\n\u{1F635}`];
    const ARR_EQUAL = [`Я всегда угадываю\n\u{1F60E}`, `Это было легко\n\u{1F60E}`, `Как все просто\n\u{1F60E}`];

    document.getElementById('btnOver').addEventListener('click', function () {
        if (gameRun) {
            if (minValue === maxValue || minValue > maxValue) {
                answerPhrase = ARR_ANSWER_PHRASE[getRandomInRange(0, 2)];
                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                minValue = answerNumber + 1;
                answerNumber = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                let arrAnswerFieldQ = [`Вы загадали число ${answerNumber}?`, `Возможно это число ${answerNumber}?`, `Наверное, это число ${answerNumber}?`];
                answerFieldQ = arrAnswerFieldQ[getRandomInRange(0, 2)];
                answerField.innerText = answerFieldQ;
            }
        }
    })

    document.getElementById('btnLess').addEventListener('click', function () {
        if (gameRun) {
            if (minValue === maxValue || maxValue < minValue || minValue > answerNumber - 1) {
                answerPhrase = ARR_ANSWER_PHRASE[getRandomInRange(0, 2)];
                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                maxValue = answerNumber - 1;
                answerNumber = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                let arrAnswerFieldQ = [`Вы загадали число ${answerNumber}?`, `Возможно это число ${answerNumber}?`, `Наверное, это число ${answerNumber}?`];
                answerFieldQ = arrAnswerFieldQ[getRandomInRange(0, 2)];
                answerField.innerText = answerFieldQ;
            }
        }
    })

    document.getElementById('btnEqual').addEventListener('click', function () {
        if (gameRun) {
            equal = ARR_EQUAL[getRandomInRange(0, 2)];
            answerField.innerText = equal;
            gameRun = false;
        }
    })
    document.getElementById('btnRetry').addEventListener('click', startGame);
    return
}

startGame();