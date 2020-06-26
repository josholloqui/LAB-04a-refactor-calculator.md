import {
    addition, subtract, multiply, division
} from './math.js';

const addButton = document.getElementById('add-button');

const addEquals = document.getElementById('add-equals');

addButton.addEventListener('click', () => {
    const value1 = document.getElementById('add-input1').value;
    const value2 = document.getElementById('add-input2').value;
    const sum = addition(value1, value2);
    addEquals.textContent = `= ${sum}`;
});

const subButton = document.getElementById('sub-button');

const subEquals = document.getElementById('sub-equals');

subButton.addEventListener('click', () => {
    const value1 = document.getElementById('sub-input1').value;
    const value2 = document.getElementById('sub-input2').value;
    const difference = subtract(value1, value2);
    subEquals.textContent = `= ${difference}`;
});

//mult = multiplication

const multButton = document.getElementById('mult-button');

const multEquals = document.getElementById('mult-equals');

multButton.addEventListener('click', () => {
    const value1 = document.getElementById('mult-input1').value;
    const value2 = document.getElementById('mult-input2').value;
    const multiplyEquals = multiply(value1, value2);
    multEquals.textContent = `= ${multiplyEquals}`;
});

const divideButton = document.getElementById('divide-button');

const divideEquals = document.getElementById('divide-equals');

divideButton.addEventListener('click', () => {
    const value1 = document.getElementById('divide-input1').value;
    const value2 = document.getElementById('divide-input2').value;
    const divisionEquals = division(value1, value2);
    divideEquals.textContent = `= ${divisionEquals}`;
});