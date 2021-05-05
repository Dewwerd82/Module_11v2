let minValue = 0;
let minValueEnd = 0;
let maxValue = 999;
let minValuestr = '';
let maxValuestr = '';
let num = 0;
let answerNumber = 0;
let answerText = '';
let answerFields = '';
let orderNumber = 0;
let numText = 0;
let A1 = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let A2 = ['одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
    'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
];
let A3 = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
    'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
];
let A4 = ['сто ', 'двести', 'триста', 'четыреста', 'пятьсот',
    'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
];
let a = 0;
let a1 = 0;
let a2 = 0;
let b = 0;
let b1 = 0;
let b2 = 0;
let c = 0;
let d = 0;
let e = 0;
let answerNumberStr = '';
let str = '';
let strText = 'Вы загадали число :';
let strText2 = 'Попытка № : ';
let start = false;

answerText = document.getElementById('orderNumberField').value;
answerFields = document.getElementById('answerField').value;

function runGame() {

    orderNumber++;
    answerNumber = Math.round((minValue + maxValue) / 2);

    if (answerNumber > 0) {
        answerNumberStr = String(propis(answerNumber));
    } else {
        answerNumberStr = "минус" + " " + String(propis(Math.abs(answerNumber)));
    }
    document.getElementById('orderNumberField').innerHTML = strText2 + String(orderNumber);
    document.getElementById('answerField').innerHTML = strText + String(answerNumber) + ' (' +
        answerNumberStr + ' )';
    if (minValue == maxValue || minValueEnd == maxValue) {
        alert('Вы не загадали число!!!');
        document.getElementById("Game").disabled = false;
        document.getElementById('MinValue').value = '-999';
        document.getElementById('MaxValue').value = '999';
        document.getElementById("MinValue").disabled = false;
        document.getElementById("MaxValue").disabled = false;
        minValue = 0;
        maxValue = 0;
        answerNumber = 0;
        orderNumber = 0;
        document.getElementById('orderNumberField').innerHTML = 'Ещё раз';
        document.getElementById('numText').innerHTML = strText;
        document.getElementById('answerField').innerHTML = 'Введите диапазон от - 999 до + 999';
    }


}

document.getElementById('btnPrev').addEventListener('click', function() {
    maxValue = answerNumber;
    runGame();
})

document.getElementById('btnNext').addEventListener('click', function() {
    minValue = answerNumber;
    runGame();
})

document.getElementById('btnOk').addEventListener('click', function() {

    document.getElementById('orderNumberField').innerHTML = 'Я угадал с ' + String(orderNumber) +
        ' попытки';
    document.getElementById("Game").disabled = true;
    document.getElementById("btnPrev").disabled = true;
    document.getElementById("btnNext").disabled = true;
    document.getElementById("btnOk").disabled = true;
    document.getElementById("btnRetry").disabled = false;
})

document.getElementById("Game").addEventListener('click', function() {

    minValue = parseInt(document.getElementById('MinValue').value);
    maxValue = parseInt(document.getElementById('MaxValue').value);
    minValuestr = document.getElementById('MinValue').value;
    maxValuestr = document.getElementById('MaxValue').value;
    minValueEnd = minValue + 1;

    if (typeof minValue === 'number' && !isNaN(minValue) &&
        typeof maxValue === 'number' && !isNaN(maxValue) && maxValue > minValue &&
        minValuestr != '' && maxValuestr != '') {

        maxValue > 1000 ? maxValue = 1000 : maxValue;
        minValue < -1000 ? minValue = -1000 : minValue;

        document.getElementById('MinValue').value = String(minValue);
        document.getElementById('MaxValue').value = String(maxValue);
        document.getElementById("Game").disabled = true;
        document.getElementById("MinValue").disabled = true;
        document.getElementById("MaxValue").disabled = true;
        document.getElementById("btnPrev").disabled = false;
        document.getElementById("btnNext").disabled = false;
        document.getElementById("btnOk").disabled = false;

        runGame();
    } else {
        alert('Некорректо ввели данные!!!');
    }
})

document.getElementById("btnRetry").addEventListener('click', function() {
    document.getElementById("Game").disabled = false;
    document.getElementById('MinValue').value = '-999';
    document.getElementById('MaxValue').value = '999';
    document.getElementById("MinValue").disabled = false;
    document.getElementById("MaxValue").disabled = false;
    minValue = 0;
    maxValue = 0;
    answerNumber = 0;
    orderNumber = 0;
    document.getElementById('orderNumberField').innerHTML = 'Ещё раз';
    document.getElementById('numText').innerHTML = strText;
    document.getElementById('answerField').innerHTML = 'Введите диапазон от - 999 до + 999';
})

function propis(n) {
    b = n % 10;
    a = (n - b) / 10;
    c = n % 100;
    b1 = n % 10;

    e = c % 10;

    a1 = (c - e) / 10;

    d = (n - c) / 100;

    if (n == 0) return 'Нуль';
    if (n < 10) return A1[n - 1]; //7

    if (n > 10 && n < 20) return A2[n - 11]; //11

    if (b == 0 && n > 9 && n < 99) return A3[a - 1]; //40

    if (c == 0 && n > 99 && n < 1000) return A4[d - 1]; //400

    if (n > 20 && n < 100) return A3[a - 1] + ' ' + A1[b - 1]; //77

    if (b == 0 && n > 99 && n < 1000) return A4[d - 1] + ' ' + A3[a1 - 1]; //100

    if (b1 == 0 && b == 0 && n > 99 && n < 1000) return A4[d - 1] + ' ' + A3[a1 - 1]; //130

    if (c > 10 && c < 20 && n > 99 && n < 1000) return A4[d - 1] + ' ' + A2[c - 11]; //111

    if (c < 10 && n > 99 && n < 1000) return A4[d - 1] + ' ' + A1[c - 1]; //101

    if (c >= 20 && c <= 99 && n >= 99 && n <= 1000) return A4[d - 1] + ' ' +
        ' ' + A3[a1 - 1] + ' ' + A1[e - 1]; //888
}