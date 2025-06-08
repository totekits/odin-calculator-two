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
    
let operand1;
let operand2;
let operator;

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







