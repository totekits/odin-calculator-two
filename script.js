function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}
    
let operand1 = ``;
let operand2 = ``;
let operator = ``;

function operate(x, operatorFunction, y) {
  return operatorFunction(x, y);
}

let content = ``;
const display = document.querySelector(`.display`);

function updateDisplay(value) {
  display.textContent = value;
}

const clear = document.querySelector(`#clear`);

clear.addEventListener(`click`, () => {
  content = ``;
  updateDisplay(content);
});

const numberButtons = document.querySelectorAll(`.number`);

numberButtons.forEach(button => {
  button.addEventListener(`click`, () => {
    const digit = button.textContent;
    if (operator === ``) {
      operand1 += digit;
      updateDisplay(operand1);
    } else {
      operand2 += digit;
      updateDisplay(operand2);
    }
  });
});

const dotBtn = document.querySelector(`#.`);

dotBtn.addEventListener(`click`, () => {
  if (operator === `` && operand1 === ``) {
    operand1 += `0.`;
    updateDisplay(operand1);
  } else if (operator === `` && !operand1.includes(`.`)) {
    operand1 += `.`;
    updateDisplay(operand1);
  } else if (operator !== `` && operand2 === ``) {
    operand2 += `0.`;
    updateDisplay(operand2);
  } else if (operator !== `` && !operand2.includes(`.`)) {
    operand2 += `.`;
    updateDisplay(operand2);
  }
});

const multiplyBtn = document.querySelector(`#x`);
const divideBtn = document.querySelector(`#÷`);
const addBtn = document.querySelector(`#add`);
const subtractBtn = document.querySelector(`#-`);











