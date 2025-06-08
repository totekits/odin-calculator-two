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

const seven = document.querySelector(`#7`);
const eight = document.querySelector(`#8`);
const nine = document.querySelector(`#9`);
const four = document.querySelector(`#4`);
const five = document.querySelector(`#5`);
const six = document.querySelector(`#6`);
const one = document.querySelector(`#1`);
const two = document.querySelector(`#2`);
const three = document.querySelector(`#3`);
const zero = document.querySelector(`#0`);
const doubleZero = document.querySelector(`#00`);
const dot = document.querySelector(`#.`);
const multiplyBtn = document.querySelector(`#x`);
const divideBtn = document.querySelector(`#÷`);
const addBtn = document.querySelector(`#add`);
const subtractBtn = document.querySelector(`#-`);

seven.addEventListener(`click`, () => {
  if (operator === ``) {
    operand1 += `7`;
    updateDisplay(operand1);
  } else {
    operand2 += `7`;
    updateDisplay(operand2)
  }
});







