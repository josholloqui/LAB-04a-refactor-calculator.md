const addInput1 = document.getElementById('add-input1');

const addInput2 = document.getElementById('add-input2');

const addButton = document.getElementById('add-button');

const addEquals = document.getElementById('add-equals');

addButton.addEventListener('click', () => {
    const value1 = addInput1.value;
    const value2 = addInput2.value;
    const sum = Number(value1) + Number(value2);
    addEquals.textContent = `= ${sum}`;
});

const subInput1 = document.getElementById('sub-input1');

const subInput2 = document.getElementById('sub-input2');

const subButton = document.getElementById('sub-button');

const subEquals = document.getElementById('sub-equals');

subButton.addEventListener('click', () => {
    const value1 = subInput1.value;
    const value2 = subInput2.value;
    const difference = Number(value1) - Number(value2);
    subEquals.textContent = `= ${difference}`;
});

//mult = multiplication

const multInput1 = document.getElementById('mult-input1');

const multInput2 = document.getElementById('mult-input2');

const multButton = document.getElementById('mult-button');

const multEquals = document.getElementById('mult-equals')

multButton.addEventListener('click', () => {
    const value1 = multInput1.value;
    const value2 = multInput2.value;
    const xEquals = Number(value1) * Number(value2);
    multEquals.textContent = `= ${xResult}`;
});

const divideInput1 = document.getElementById('divide-input1');

const divideInput2 = document.getElementById('divide-input2');

const divideButton = document.getElementById('divide-button');

const divideEquals = document.getElementById('divide-equals');

divideButton.addEventListener('click', () => {
    const value1 = divideInput1.value;
    const value2 = divideInput2.value;
    const divisionEquals = Number(value1) / Number(value2);
    divideEquals.textContent = `= ${divisionEquals}`;
});